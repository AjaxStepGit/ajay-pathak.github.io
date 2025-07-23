import { Paintbrush, Computer } from 'lucide-react';
import Image from 'next/image';
import ExploreDesignDialog from './dialog/explore-desig';
import DevProjectsDialog from './dialog/development-dialog';
import ServiceDialog from './dialog/service-dialog';

export default function Service() {
  return (
    <div id='service' className="bg-base relative h-screen w-full flex justify-center">
      <Image
        src={'/arts/color-shape-sz.svg'}
        className="absolute z-5 bottom-0 w-full h-auto"
        width={1400}
        height={560}
        alt="curve-line-bg"
      />
      <div className="w-res py-14">
        <div className="flex flex-col items-center">
          <h5 className="bg-shine-gradient bg-[length:200%_auto] text-clip inline-block title-text mb-6 uppercase">
            SERVICE
          </h5>
          <h1 className="w-medium text-3xl font-extrabold mb-16 text-black text-center">
            How I Can Help You With
          </h1>
          <div className="flex border border-secondary-light bg-base/90 relative z-50">
            <div className="flex  w-1/2 flex-col border-r border-secondary-light p-12 ">
              <div className="flex gap-6 items-center font-bold mb-7">
                <div className="rounded-full shadow-xl bg-secondary-dark w-icon-md h-icon-md flex justify-center items-center">
                  <Paintbrush className="text-white w-icon-sm" />
                </div>
                <h4 className="text-xl text-black">Design</h4>
              </div>
              <p className="text-base text-text-gray mb-7 text-wrap">
                I craft pixel-perfect, responsive interfaces using modern UI
                kits, Storybook, and Figma. My designs are not just pretty —
                they are built to convert and scale.
              </p>
              {/* <div className="flex gap-6 items-center">
                <div className="rounded-full shadow-xl bg-white w-icon-md h-icon-md flex justify-center items-center">
                  <PlusIcon className="text-secondary w-icon-sm" />
                </div>
                <h4 className="text-base text-black">Learn More</h4>
              </div> */}
              <ExploreDesignDialog />
            </div>
            <div className="flex w-1/2 flex-col p-12 ">
              <div className="flex gap-6 items-center font-bold mb-7">
                <div className="rounded-full shadow-xl bg-secondary-dark w-icon-md h-icon-md flex justify-center items-center">
                  <Computer className="text-white w-icon-sm" />
                </div>
                <h4 className="text-xl text-black">Development</h4>
              </div>
              <p className="text-base text-text-gray mb-7 text-wrap">
                From REST APIs to product scrapers and admin dashboards — I
                build scalable full stack apps with NestJS, Prisma, PostgreSQL,
                and deploy them on Vercel. I build high-performance frontend
                apps using React, Next.js, TypeScript, and animations — always
                focusing on UX, SEO, and clean architecture.
              </p>
              {/* <div className="flex gap-6 items-center">
                <div className="rounded-full shadow-xl bg-white w-icon-md h-icon-md flex justify-center items-center">
                  <PlusIcon className="text-secondary w-icon-sm" />
                </div>
                <h4 className="text-base text-black">Learn More</h4>
              </div> */}
              <DevProjectsDialog />
            </div>
          </div>
          <ServiceDialog />
        </div>
      </div>
    </div>
  );
}
