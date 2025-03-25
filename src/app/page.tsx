import { Hero } from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Welcome from '@/components/sections/Welcome';
import Services from '@/components/sections/Services';
import { TestimonialSection } from '@/components/sections/Testimonial';
import LogoCloud from '@/components/sections/LogoCloud';
import LatestNews from '@/components/sections/LatestNews';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Welcome />
      <Services />
      <Stats />
      <TestimonialSection />
      <LogoCloud />
      <LatestNews />
    </main>
  );
}
