'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

import {
  LaptopIcon as LaptopCode,
  ShoppingCart,
  UserCog,
  Wrench,
  Network,
} from 'lucide-react';

export default function ServiceDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mt-4 flex gap-2 z-10 relative">
          <h4 className="text-text-gray text-base mt-4 cursor-pointer">
            Want more service? <span className="text-tdark">Explore Now</span>
          </h4>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader hidden>
          <DialogTitle>My IT Services</DialogTitle>
          <DialogDescription>
            From full-stack development to e-commerce solutions, here's how I
            can help you build.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6 text-left text-sm text-gray-700">
          {/* Service: Custom Web Development */}

          <div className="flex justify-center">
            <h1 className="heading-mtext">My IT Services</h1>
          </div>
          <div className="flex items-start gap-4">
            <LaptopCode className="w-5 h-5 text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-tdark">
                Custom Web Development
              </h3>
              <p>
                Full-stack web apps using React, Next.js, NestJS. Fast,
                scalable, and tailored to your needs.
              </p>
            </div>
          </div>

          {/* Service: E-commerce Projects */}
          <div className="flex items-start gap-4">
            <ShoppingCart className="w-5 h-5 text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-tdark">E-commerce Projects</h3>
              <p>
                Online store setup, product pages, payment integration, and
                admin tools for smooth selling.
              </p>
            </div>
          </div>

          {/* Service: Personal Developer for Hire */}
          <div className="flex items-start gap-4">
            <UserCog className="w-5 h-5 text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-tdark">Personal Developer</h3>
              <p>
                Freelance/remote developer for MVPs, dashboards, landing pages,
                and personal brands.
              </p>
            </div>
          </div>

          {/* Service: API & Backend Services */}
          <div className="flex items-start gap-4">
            <Network className="w-5 h-5 text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-tdark">
                API & Backend Services
              </h3>
              <p>
                Secure APIs, cron jobs, backend automation using NestJS,
                PostgreSQL, and MongoDB.
              </p>
            </div>
          </div>

          {/* Service: Technical Consultation */}
          <div className="flex items-start gap-4">
            <Wrench className="w-5 h-5 text-secondary mt-1" />
            <div>
              <h3 className="font-semibold text-tdark">
                Technical Consultation
              </h3>
              <p>
                Guidance on system design, dev tools, and stack choices for
                faster, smarter builds.
              </p>
            </div>
          </div>
        </div>

        <DialogClose asChild>
          <button className="mt-6 px-4 py-2 bg-secondary text-white rounded-md">
            Close
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
