import { CompassIcon, MailIcon, PhoneCallIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import Icon from './ui/icon';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className="section-wrapper bg-accent-medium">
      <div className="flex w-res items-center gap-[130px]">
        <Card className="bg-white rounded-md shadow-md px-12 py-14 w-[570px]">
          <h4 className="mb-6 heading-mtext">Get In Touch</h4>
          <Input className="mb-6" placeholder="Your email" />
          <Input placeholder="Subject" className="mb-6" />
          <Textarea placeholder="Message" className="mb-6" />
          <Button className="w-fit uppercase self-end" variant={'secondary'}>
            submit now
          </Button>
        </Card>
        <div className="flex flex-col gap-6 p-7 w-[470px]">
          <h3 className="title-text">Contact</h3>
          <h2 className="heading-text">Contact Me</h2>
          <p className="small-text text-tdark">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
          <div className="flex flex-col gap-4 mt-6 text-tdark">
            <div className="flex items-center gap-4">
              <span>
                <Icon icon={<CompassIcon />} className="icon-md" />
              </span>
              2247 Lunetta Street, TX 76301
            </div>
            <div className="flex items-center gap-4">
              <span>
                <Icon icon={<PhoneCallIcon />} className="icon-md" />
              </span>
              +91 805 222 9017
            </div>{' '}
            <div className="flex items-center gap-4">
              <span>
                <Icon icon={<MailIcon />} className="icon-md" />
              </span>
              pathak.ajayofficial@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
