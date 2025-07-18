import Image from 'next/image';
import Icon from './ui/icon';
import { Button } from './ui/button';

export default function Testimonials() {
  const companyArr = [
    {
      iconLink: '/image/review-1.webp',
      altText: 'review-1-alt',
      heading: 'Graham Griffiths',
      companyName: 'Green Innovations',
      cover: 432,
      review:
        'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.',
    },
    {
      iconLink: '/image/review-2.webp',
      altText: 'review-2-alt',
      heading: 'Alan Martí',
      companyName: 'Meta Inc.',
      cover: 494,
      review:
        'A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions.',
    },
    {
      iconLink: '/image/review-3.webp',
      altText: 'review-3-alt',
      heading: 'Richardo Kann',
      companyName: 'Photogram',
      cover: 400,
      review:
        'Provide your business with a variety of digital solutions to promote your product or service online.',
    },
  ];

  return (
    <section className="section-wrapper bg-base min-h-screen">
      <div className="flex flex-col items-center w-res">
        <h3 className="title-text">testimonials</h3>
        <h2 className="heading-text w-[394px] mb-16 text-center">
          What My Clients Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
          {companyArr.map((item, index) => (
            <div
              className={`p-6 shadow rounded flex flex-col gap-9 border border-secondary-light ${
                index === 1 ? `bg-white` : `bg-transparent`
              }`}
              key={`rev-${index}`}
            >
              <Image
                src={`/image/testimonials-star.webp`}
                alt="star"
                width={152}
                height={24}
              />
              <p className="small-text w-[295px]">{item.review}</p>
              <div className="flex gap-6">
                <Icon
                  icon={
                    <Image
                      alt={item.altText}
                      src={item.iconLink}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  }
                />
                <div className="flex flex-col justify-center">
                  <h3 className="heading-mtext text-tdark">{item.heading}</h3>
                  <p className="small-text">{item.companyName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-16">
          <Button variant={'ghost'} className="text-black">
            SEE ALL
          </Button>
        </div>
      </div>
    </section>
  );
}
