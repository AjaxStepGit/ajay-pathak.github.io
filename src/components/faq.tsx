import { FAQQues } from '@/lib/helper';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion';
import { Button } from './ui/button';
import Image from 'next/image';

export default function Faq() {
  return (
    <section id='faq' className="section-wrapper py-27">
      <div className="flex flex-col">
        <div className="flex w-res gap-[130px] flex-row">
          <div className="flex flex-col w-full lg:w-1/2">
            <h3 className="title-text">Faq</h3>
            <h2 className="text-white heading-text-sm mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-white small-text mb-8">
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house.
            </p>
            <Button className="w-fit bg-transparent text-md text-white capitalize">
              Contact me
            </Button>
          </div>

          <div className="flex flex-col w-full lg:w-1/2">
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-md border border-[#3A3C56]"
              defaultValue="item-0"
            >
              {FAQQues.map((item, index) => (
                <AccordionItem key={`faq-${index}`} value={`item-${index}`}>
                  <AccordionTrigger className="py-5 px-12">
                    <h3 className="heading-mtext">{item.title}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white py-[41px] px-12 flex flex-col gap-4">
                    <p className="text-tgray text-md">{item.summary}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-res mt-[117px]">
            <Image
              className="w-full"
              src={`/image/faq-logo.webp`}
              alt="digitail-slide-vortex-travel-explorer-fuzion-mediafury"
              width={420}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
