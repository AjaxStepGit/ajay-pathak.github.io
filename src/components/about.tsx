import Image from 'next/image';
import { CalendarIcon, TvIcon } from 'lucide-react';
import AboutMeSheet from './sheet/about-me';

export default function About() {
  return (
    <section id='about' className="bg-base flex flex-col w-full py-27 justify-center items-center">
      <div className="flex relative w-res gap-[170px]">
        <Image
          src={'/image/about-image-me.webp'}
          alt="image-me"
          width={100}
          height={100}
          key={`about-img-me`}
          className="absolute top-10 left-20 h-sm w-auto rounded-full outline outline-2 outline-white outline-offset-[-8px]"
        />
        <Image
          src={'/image/about-image-1.webp'}
          alt="image-background"
          width={500}
          height={550}
          key={`about-img-bg`}
          className="h-cover h-full w-full"
        />
        <div className="flex flex-col w-full">
          <h5 className="text-md text-accent-light uppercase mb-5">
            Ajay Pathak
          </h5>
          <h2 className="text-3xl font-extrabold w-[388px] text-tdark mb-6">
            Professional Web Designer
          </h2>
          <p className="text-tdark text-lg mb-5">
            Provides a full service range
          </p>
          <p className="text-tdark text-base opacity-65 mb-9">
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </p>
          <AboutMeSheet />
        </div>
      </div>
      <div className="flex mt-14 border border-secondary-light w-res text-black mb-7">
        <div className="flex items-center py-6 px-7 w-1/2 gap-10 border-r border-secondary-light">
          <div className="flex items-center justify-center rounded-full h-icon-xl w-icon-xl shadow-xl bg-secondary-dark">
            <CalendarIcon className="text-white w-icon-md h-icon-md" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-tdark font-extrabold text-heading">42%</h3>
            <p className="text-lg text-tdark">Years of experience</p>
          </div>
        </div>
        <div className="flex items-center py-6 px-7 w-1/2 gap-10">
          <div className="flex items-center justify-center rounded-full h-icon-xl w-icon-xl shadow-xl bg-secondary-dark">
            <TvIcon className="text-white w-icon-md h-icon-md" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-tdark font-extrabold text-heading">25+</h3>
            <p className="text-lg text-tdark">Projects done</p>
          </div>
        </div>
      </div>
    </section>
  );
}
