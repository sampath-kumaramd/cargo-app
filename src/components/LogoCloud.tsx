import Image from 'next/image';

const LogoCloud = () => {
  const logos = [
    {
      src: '/logos/Ford.png',
      alt: 'Ford company',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/Nike.png',
      alt: 'Nike',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/SunPower.png',
      alt: 'SunPower',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/BlueCross.png',
      alt: 'BlueCross',
      width: 120,
      height: 40,
    },
    {
      src: '/logos/Timberland.png',
      alt: 'Timberland',
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
