import About from '@/components/about';
import Contact from '@/components/contact';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import NewLook from '@/components/new-look';
import Portfolio from '@/components/portfolio';
import Projects from '@/components/projects';
import Service from '@/components/service';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col items-center">
        <Header />
        <Hero />
        <Service />
        <Portfolio />
        <Projects />
        <About />
        <NewLook />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
