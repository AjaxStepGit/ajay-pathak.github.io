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
import { PlusIcon } from 'lucide-react';

export default function ExploreDesignDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-6 items-center cursor-pointer">
          <div className="rounded-full shadow-xl bg-white w-icon-md h-icon-md flex justify-center items-center">
            <PlusIcon className="text-secondary w-icon-sm" />
          </div>
          <h4 className="text-base text-black">Learn More</h4>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader hidden>
          <DialogTitle></DialogTitle>
          <DialogDescription className="text-black">
            Explore beautifully crafted UI designs for dashboards, landing
            pages, and login screens.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4 text-left text-sm text-gray-700">
          <div className="flex justify-center">
            <h1 className="heading-mtext">Designs Illustrations</h1>
          </div>
          <div>
            <h3 className="font-semibold text-tdark">1. SAAS Dashboard UI</h3>
            <p>
              A modern SaaS dashboard with clean cards, analytics, and
              statistics.
            </p>
            <a
              href="https://www.figma.com/design/chLhPfumhtgXtbyYoylBho/SAAS-Dashboard--Community-?m=auto&is-community-duplicate=1&fuid=1220649336471735074"
              target="_blank"
              className="text-blue-600 underline"
            >
              View Figma
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-tdark">2. Login UI</h3>
            <p>
              A minimal and elegant login screen perfect for user authentication
              flows.
            </p>
            <a
              href="https://www.figma.com/design/70TF0EXNEcrl1iNyaYWuFt/Login-Page-Perfect-UI--Freebie---Community-"
              target="_blank"
              className="text-blue-600 underline"
            >
              View Figma
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-tdark">3. VPN Landing Page UI</h3>
            <p>
              Landing page concept for a VPN service, with CTA, pricing, and
              feature blocks.
            </p>
            <a
              href="https://www.figma.com/design/FNxIX0xVIV0m7PlYnz9KLP/FREEBIES-Landingpage-LaslesVPN--Community-?node-id=14-2&p=f&t=csfdakHr6e4XMjFJ-0"
              target="_blank"
              className="text-blue-600 underline"
            >
              View Figma
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-tdark">4. CRM Dashboard UI</h3>
            <p>
              A user-friendly dashboard for managing customer lists and sales
              data.
            </p>
            <a
              href="https://www.figma.com/design/ld50vRwH3r93FvTm9qJUVD/CRM-Dashboard-Customers-List--Community-?m=auto&is-community-duplicate=1&fuid=1220649336471735074"
              target="_blank"
              className="text-blue-600 underline"
            >
              View Figma
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-tdark">5. Car Rent Website UI</h3>
            <p>
              Interactive and modern car rental UI with booking flows and
              vehicle listings.
            </p>
            <a
              href="https://www.figma.com/design/AhvRGvXHe75diLEBBTDABM/Car-Rent-Website-Design---Pickolab-Studio--Community-?t=LOwmXHo2qYGaAqP6-0"
              target="_blank"
              className="text-blue-600 underline"
            >
              View Figma
            </a>
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
