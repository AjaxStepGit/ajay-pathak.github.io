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
import { Code2Icon } from 'lucide-react';

export default function DevProjectsDialog() {
  return (
    <Dialog>
      {/* Trigger using your custom UI */}
      <DialogTrigger asChild>
        <div className="flex gap-6 items-center cursor-pointer">
          <div className="rounded-full shadow-xl bg-white w-icon-md h-icon-md flex justify-center items-center">
            <Code2Icon className="text-secondary w-icon-sm" />
          </div>
          <h4 className="text-base text-black">View Work</h4>
        </div>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader hidden>
          <DialogTitle>My Development Projects</DialogTitle>
          <DialogDescription>
            Explore some of my technical work, open-source contributions, and
            project showcases.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4 text-left text-sm text-gray-700">
          <div className="flex justify-center">
            <h1 className="heading-mtext">Development Illustrations</h1>
          </div>
          <div>
            <h3 className="font-semibold text-tdark">
              🛒 Price Comparison Tool
            </h3>
            <p>
              Built with React (TypeScript) and NestJS. A weekly cron-tdarkd
              scraper collects data on 1.5L+ products from various competitor
              websites. It includes comparative graphs, pricing insights, and a
              full admin panel.
            </p>
            <a
              href="https://github.com/ajaxstepgit"
              target="_blank"
              className="text-blue-600 underline"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-tdark">🧪 Admin Portal</h3>
            <p>
              Developed a powerful dashboard for data visualization, role-tdarkd
              access, and product management, aligned with internal ops
              workflows. Integrated with the main tool using API auth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-tdark">
              🦷 Dentalkart Official Website
            </h3>
            <p>
              Worked as frontend lead using Next.js. Implemented reusable UI
              blocks, improved SEO, and contributed to performance optimization.
              Seamlessly integrated product listings and dynamic content.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-tdark">
              🌍 Open Source Contributions
            </h3>
            <p>
              Regularly contribute to Apache/Graviton and GSAP. Known for
              improving UI animations, accessibility, and developer experience
              in those ecosystems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-tdark">📹 Content Creation</h3>
            <p>
              I run a YouTube channel sharing tutorials, UI experiments, and
              fullstack builds with a focus on smooth UX, Framer Motion, and
              Next.js.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm text-gray-600 mb-1">🔗 Connect With Me</h4>
          <ul className="list-disc ml-5 text-blue-600 text-sm space-y-1">
            <li>
              <a
                href="https://github.com/ajaxstepgit"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub: @ajaxstepgit
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ajay-pathak-ajax/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn: Ajay Pathak
              </a>
            </li>
            <li>
              <a href="mailto:ajayofficialbiz@gmail.com">
                Email: pathak.ajayofficial@gmail.com
              </a>
            </li>
          </ul>
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
