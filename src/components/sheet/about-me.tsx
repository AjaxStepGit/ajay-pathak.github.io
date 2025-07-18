'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import animatedBg from '../../../public/arts/animated-bg-4.svg';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutMeSheet() {
  return (
    <Sheet>
      {/* ✅ Trigger Button */}
      <SheetTrigger asChild>
        <Button className="rounded-sm w-[138px] h-icon-md text-black bg-white text-sm font-black shadow-md">
          About Me
        </Button>
      </SheetTrigger>

      {/* ✅ Sliding Sheet Content */}
      <SheetContent side="bottom" className="h-screen bg-base overflow-y-auto">
        <Image
          src={animatedBg}
          className="absolute z-50 top-20 w-full h-full brightness-70"
          width={1400}
          height={760}
          alt="animated-bg-about-me"
          key={'anim-bg-s'}
        />
        <SheetHeader className="flex justify-center w-full">
          <SheetTitle hidden></SheetTitle>
          <SheetDescription hidden></SheetDescription>
          <motion.h2
            className="heading-text text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ajay Krishna Pathak
          </motion.h2>
        </SheetHeader>

        <div className="flex w-full justify-center">
          <div className="w-res p-4 text-justify">
            {/* 🧠 Intro */}
            <motion.p
              className="mt-4 text-sm text-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I’m a Full Stack Developer (MERN) passionate about transforming
              ideas into impactful digital experiences. I focus on building
              fast, scalable, and user-centric applications using React,
              Next.js, TypeScript, and NestJS. My mission is to create clean,
              performant solutions that scale — both in code and business value.
            </motion.p>

            <motion.p
              className="mt-4 text-sm text-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              From working at Dentalkart to leading open-source contributions
              and launching freelancing projects, I bring a blend of design
              sense, backend architecture, and real-world business impact to
              every product I build.
            </motion.p>

            <Separator className="my-6" />

            {/* 🔧 Key Contributions */}
            <h3 className="text-lg font-semibold text-tdark mb-2">
              Key Contributions
            </h3>
            <ul className="list-disc list-inside text-sm text-black/80 space-y-2">
              <li>
                Improved Dentalkart’s website performance by 80% by optimizing
                the Next.js stack.
              </li>
              <li>
                Developed an internal price comparison tool scraping over 1.5L+
                products using cron-based logic.
              </li>
              <li>
                Led the design system project with Storybook, standardizing UI
                components across teams.
              </li>
              <li>
                Integrated AWS Transcribe for real-time speech-to-text
                workflows.
              </li>
              <li>
                Built REST and GraphQL APIs with complex relational queries for
                dashboard apps.
              </li>
            </ul>

            <Separator className="my-6" />

            {/* 👨‍💻 Freelance Experience */}
            <h3 className="text-lg font-semibold text-tdark mb-2">
              Freelancing & Open Source
            </h3>
            <ul className="list-disc list-inside text-sm text-black/80 space-y-2">
              <li>
                Built CRM, admin panels, and dashboards for multiple startup
                clients.
              </li>
              <li>
                Contributed to Apache Gravitino with fixes and connector
                improvements.
              </li>
              <li>
                Designed SchoolConnect — an end-to-end school management system
                with PostgreSQL, React, and Drizzle ORM.
              </li>
              <li>
                Published open-source budget tracker and Pokédex with filters,
                caching, and infinite scroll using TanStack Query.
              </li>
            </ul>

            <Separator className="my-6" />

            {/* 💼 Professional Experience */}
            <h3 className="text-lg font-semibold text-tdark mb-2">
              Professional Experience
            </h3>
            <div className="text-sm text-black/80">
              <p>
                <strong>
                  Software Development Engineer — Sunasho Technologies
                  (Dentalkart)
                </strong>
              </p>
              <p className="mb-2">Jan 2023 – Jan 2025</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Owned end-to-end development of Dentalkart’s admin dashboard
                  with TypeScript and React.
                </li>
                <li>
                  Handled API authentication, secure routes, and backend
                  optimization with Express.js and NestJS.
                </li>
              </ul>

              <p className="mt-4">
                <strong>
                  Full Stack Developer Intern — Inventics Software
                </strong>
              </p>
              <p className="mb-2">2023, Lucknow</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Developed admin panels and ensured full frontend-backend
                  integration for client apps.
                </li>
              </ul>
            </div>

            <Separator className="my-6" />

            {/* 🎓 Education */}
            <h3 className="text-lg font-semibold text-tdark mb-2">Education</h3>
            <div className="text-sm text-black/80">
              <p>
                <strong>MCA — Institute of Engineering and Technology</strong>{' '}
                (2021 – 2023)
              </p>
              <p>
                <strong>BCA — IISE College</strong> (2018 – 2021)
              </p>
            </div>

            <Separator className="my-6" />

            {/* 💻 Skills */}
            <h3 className="text-lg font-semibold text-tdark mb-2">
              Technical Skills
            </h3>
            <ul className="list-disc list-inside text-sm text-black/80 space-y-1">
              <li>
                <strong>Frontend:</strong> React.js, Next.js, TypeScript,
                Chart.js, Tailwind, MUI, Shadcn
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, NestJS, GraphQL,
                REST
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL, MongoDB, Firebase,
                Drizzle ORM
              </li>
              <li>
                <strong>DevOps & Tools:</strong> AWS (EC2, S3, Transcribe),
                Docker, Git, Postman, Jira
              </li>
              <li>
                <strong>UI/UX:</strong> Storybook, GSAP, Framer Motion, Zendesk,
                Notion
              </li>
            </ul>

            <Separator className="my-6" />

            {/* 🤝 Let's Connect */}
            <motion.div
              className="mt-6 flex flex-col gap-2 text-sm text-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              <p>📍 Based in Lucknow, India</p>
              <p>📧 pathak.ajayofficial@gmail.com</p>
              <p>
                🔗{' '}
                <a
                  href="https://github.com/AjaxStepGit"
                  target="_blank"
                  className="underline text-blue-600"
                >
                  GitHub: AjaxStepGit
                </a>
              </p>
              <p>
                🔗{' '}
                <a
                  href="https://linkedin.com/in/ajay-krishna-pathak"
                  target="_blank"
                  className="underline text-blue-600"
                >
                  LinkedIn: Ajay Krishna Pathak
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
