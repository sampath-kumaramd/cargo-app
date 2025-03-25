import { Hero } from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Welcome from '@/components/sections/Welcome';
import Services from '@/components/Services';
import { TestimonialSection } from '@/components/TestimonialSection';
import LogoCloud from '@/components/LogoCloud';
import LatestNews from '@/components/LatestNews';
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
