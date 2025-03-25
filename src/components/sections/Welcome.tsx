import Image from 'next/image';

import { Button } from '@/components/ui/button';

const Welcome = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Images */}
        <div className="relative">
          <div className="relative w-full h-[400px]">
            {/* First image - warehouse worker */}
            <div className="absolute left-0 bottom-0 w-[40%] h-[300px] z-10">
              <Image
                src="/images/delivery-worker.png"
                alt="Warehouse worker handling packages"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Second image - delivery worker */}
            <div className="absolute right-0 top-0 w-[90%] h-[300px]">
              <Image
                src="/images/warehouse-worker.png"
                alt="Delivery worker with clipboard"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Stats card */}
          <div className="absolute bottom-4 right-4 bg-[#ff7c46] text-white p-6 rounded-lg">
            <div className="text-4xl font-bold">15,350+</div>
            <div className="text-sm">Clients Worldwide</div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            TransMax Logistics{' '}
            <span className="block">
              Around <span className="text-coral-500">the World</span>
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Transmax is the world&apos;s driving worldwide coordinations
            supplier — we uphold industry and exchange the worldwide trade of
            merchandise through land transport.
          </p>
          <p className="text-gray-600 text-lg">
            Our worth added administrations guarantee the progression of
            products proceeds consistently and supply chains stay lean and
            streamlined for progress.
          </p>
          <Button
            variant="default"
            className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-2"
          >
            MORE ABOUT US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
