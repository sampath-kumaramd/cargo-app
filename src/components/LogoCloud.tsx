import Image from 'next/image';

const LogoCloud = () => {
  const logos = [
    {
      src: '/logos/reuss.svg',
      alt: 'Reuss SEO Company',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/genesis.svg',
      alt: 'Genesis',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/integrio.svg',
      alt: 'Integrio Corp',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/brainbiz.svg',
      alt: 'Brainbiz Digital Agency',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/ziczac.svg',
      alt: 'Zic Zac',
      width: 120,
      height: 40,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
