import { CheckIcon } from 'lucide-react';
import Icon from './ui/icon';
import Image from 'next/image';
import { Button } from './ui/button';

export default function NewLook() {
  const featureArr = [
    'Range including technical skills',
    'Business understanding',
    'Partner on the long run',
  ];

  return (
    <section id='newlook' className="relative bg-primary-dark flex flex-col justify-center w-full">
      <div className="flex justify-center w-full relative py-27">
        <div className="flex h-full w-res items-center gap-[125px]">
          <div className="flex flex-col gap-5">
            <p className="title-text">Features</p>
            <h3 className="heading-text text-white w-cover">
              Give Your Site A New Look
            </h3>
            <p className="text-description">
              Service range including technical skills, design, business
              understanding.
            </p>
            {featureArr.map((item, index) => (
              <div className="flex gap-4" key={`feature-${index + 1}`}>
                <Icon
                  className="w-icon-sm h-icon-sm"
                  key={`feature-icon-${index + 1}`}
                  icon={<CheckIcon />}
                />
                <p
                  className="small-text text-tgray"
                  key={`feature-p-${index + 1}`}
                >
                  Range including technical skills
                </p>
              </div>
            ))}
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src={'/image/new-look-2.webp'}
              alt="new-look-1"
              width={580}
              height={522}
            />
            <Image
              src={'/image/me.webp'}
              alt="image-me-new-look"
              width={200}
              height={200}
              key={`about-img-me`}
              className="absolute -bottom-5 right-30 h-[200px] w-auto rounded-full shadow-xl"
            />
          </div>
        </div>
        <Image
          src={'/image/new-look-3.webp'}
          alt="image-artifact-new-look"
          width={100}
          height={100}
          key={`about-img-artifact`}
          className="absolute -bottom-13 left-20 z-5"
        />
      </div>
      <div className="relative flex justify-center z-1 bg-accent-medium h-[300px] w-full items-center">
        <div className="flex relative w-res gap-[180px]">
          <div className="flex flex-col w-xs gap-4 w-1/3">
            <p className="title-text">Get Started</p>
            <h4 className="heading-mtext text-black">
              I Help Companies Move Faster
            </h4>
            <Button className="w-2/3" variant={'secondary'}>
              CONTACT ME
            </Button>
          </div>
          <div className="flex w-2/3 items-center">
            <p className="small-text text-tgray w-[350px]">
              Put themselves in the merchant's shoes. It is meant to partner on
              the long run.
            </p>
            <Image
              src={'/image/new-look-4.webp'}
              alt="placeholder-alt"
              width={338}
              height={242}
              key={`placeholder-img`}
              className="ml-15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
