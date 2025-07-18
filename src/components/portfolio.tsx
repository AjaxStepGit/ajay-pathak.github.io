'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from './ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { exp } from '@/lib/helper';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <section className="bg-primary-dark w-full flex justify-center py-14">
      <div className="w-res flex flex-col">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-5">
            <h5 className="text-accent-lights text-base uppercase tracking-wide text-secondary">
              portfolio
            </h5>
            <h1 className="text-3xl capitalize font-extrabold text-white">
              Professional Work
            </h1>
          </div>
          <div>
            <Link href={'https://github.com/AjaxStepGit/'}>
              <Button className="h-12 border border-white rounded-sm text-sm uppercase bg-transparent font-black">
                EXPLORE NOW
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="mySwiper w-full max-w-3xl"
            autoplay={{ delay: 6000, disableOnInteraction: true }}
          >
            {exp.map((item, index) => (
              <SwiperSlide key={`SWIPER-${index}`}>
                <div className="relative flex flex-col gap-3">
                  <DotLottieReact
                    key={`bg-anim-1`}
                    src="/animation/pattern-float.lottie"
                    loop
                    autoplay
                    className="absolute z-1 scale-115"
                  />
                  <DotLottieReact
                    key={`bg-anim-2`}
                    src="/animation/pattern-hexagon.lottie"
                    loop
                    autoplay
                    className="absolute z-1 right-10 top-40 scale-100 brightness-50"
                  />
                  <div className="flex justify-center h-base w-auto">
                    <DotLottieReact
                      key={`animateon-${index}`}
                      src={item.iconLink}
                      loop
                      autoplay
                      className="w-auto h-base relative z-5"
                    />
                  </div>
                  <div className="flex flex-col items-center h-xs">
                    <h4 className="text-center text-heading font-extrabold text-white capitalize">
                      {item.title}
                    </h4>
                    <p className="text-center text-white font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
