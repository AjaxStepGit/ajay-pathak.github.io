'use client'

import { useState } from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { LoaderIcon } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactCard() {
  const [form, setForm] = useState({ email: '', message: '', subject: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      setStatus(res.ok ? 'success' : 'error')

      if (res.ok) {
        toast.success(data.message || 'Message sent!')
        setForm({ subject: '', email: '', message: '' })
      } else {
        toast.error(data.message || 'Something went wrong.')
      }
    } catch (error: any) {
      setStatus('error')
      toast.error(error?.message || 'Network error')
    }
  }

  return (
    <Card className="bg-white rounded-md shadow-md px-6 sm:px-12 py-10 sm:py-14 w-full max-w-xl">
      <h4 className="mb-6 heading-mtext text-tdark">Get In Touch</h4>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input
          name="email"
          type="email"
          placeholder="Your email"
          required
          aria-label="Email address"
          className="mb-6 text-tgray font-medium"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          name="subject"
          placeholder="Subject"
          required
          aria-label="Subject"
          className="mb-6 text-tgray font-medium"
          value={form.subject}
          onChange={handleChange}
        />
        <Textarea
          name="message"
          placeholder="Message"
          required
          aria-label="Message"
          className="mb-6 text-tgray font-medium"
          value={form.message}
          onChange={handleChange}
        />
        <input type="hidden" name="_captcha" value="false" />
        <Button type="submit" className="w-fit uppercase self-end" variant="secondary">
          {status === 'loading' ? <LoaderIcon className="animate-spin size-5" /> : 'Submit Now'}
        </Button>
      </form>
    </Card>
  )
}
