'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import { toast } from 'sonner';
import { LoaderIcon } from 'lucide-react';

export default function ContactDialog({
  triggerClassName,
  triggerText,
}: {
  triggerClassName?: string;
  triggerText?: string;
}) {
  const [form, setForm] = useState({ email: '', message: '', subject: '' });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setStatus(data.message);
      if (res.ok) {
        setForm({ subject: '', email: '', message: '' });
        toast.success(data.message);
        setOpen(false);
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      setStatus('error');
      toast.error(error?.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>
          {triggerText || `Contact Me`}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-md shadow-md px-12 py-14">
        <DialogHeader>
          <DialogTitle className="mb-2 heading-mtext text-tdark">
            Get In Touch
          </DialogTitle>
          <DialogDescription className="mb-6 text-sm text-gray-500">
            We’ll contact you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="mb-6 text-tgray font-medium"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            name="subject"
            placeholder="Subject"
            required
            className="mb-6 text-tgray font-medium"
            onChange={handleChange}
            value={form.subject}
          />
          <Textarea
            name="message"
            placeholder="Message"
            required
            className="mb-6 text-tgray font-medium"
            onChange={handleChange}
            value={form.message}
          />
          <input type="hidden" name="_captcha" value="false" />
          <Button
            type="submit"
            className="w-fit uppercase self-end"
            variant="secondary"
          >
            {status === 'loading' ? (
              <LoaderIcon className="animate-spin" />
            ) : (
              'Submit now'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
