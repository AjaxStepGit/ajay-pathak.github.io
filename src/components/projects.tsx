import { projects } from '@/lib/helper';
import { Button } from './ui/button';
import Image from 'next/image';
import { Card } from './ui/card';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="bg-primary-dark w-full min-h-screen flex justify-center py-14">
      <div className="w-res flex flex-col">
        {/* Header */}
        <div className="flex w-full justify-between mt-14">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl capitalize font-extrabold text-white">
              Projects
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

        {/* Projects Grid */}
        <div className="grid grid-cols-3 w-full p-6 gap-4 mt-12 bg-base rounded-xl">
          {projects.map((item, index) => (
            <Card
              className="relative overflow-hidden rounded-xl w-full h-[250px] bg-black shadow-xl"
              key={`project-${index}`}
            >
              <Link href={item.githubLink}>
                <Image
                  src={item.image}
                  alt={`project-image-${index}`}
                  fill
                  className="object-cover brightness-30 z-0"
                />
                <div className="absolute bottom-0 left-0 w-full px-4 py-4 z-10 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
