import { Phone, MapPin } from 'lucide-react';

export const footerData = {
  sections: [
    {
      title: 'About Us',
      type: 'about',
      content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        contact: [
          { icon: Phone, text: '(+44) 11 434 7575' },
          { icon: MapPin, text: '42 Lily Ave, Colombo 06600' },
        ],
      },
    },
    {
      title: 'Latest News',
      type: 'news',
      content: [
        {
          text: 'Sed ut perspiciatis unde omnia iste natus error sit voluptatem',
          time: '5 Minutes Ago',
        },
        {
          text: 'Sed ut perspiciatis unde omnia iste natus error sit voluptatem',
          time: '5 Minutes Ago',
        },
      ],
    },
    {
      title: 'Customer Service',
      type: 'links',
      content: [
        {
          text: 'Support Forums',
          href: '/support-forums',
        },
        {
          text: 'Communication',
          href: '/communication',
        },
        {
          text: 'FAQS',
          href: '/faqs',
        },
        {
          text: 'Privacy Policy',
          href: '/privacy-policy',
        },
        {
          text: 'Rules & Condition',
          href: '/rules-and-conditions',
        },
        {
          text: 'Contact Us',
          href: '/contact',
        },
      ],
    },
    {
      title: 'Customer Service',
      type: 'gallery',
      content: [
        {
          src: '/images/footer-gallery/img1.jpg',
          alt: 'Gallery image 1',
        },
        {
          src: '/images/footer-gallery/img2.jpg',
          alt: 'Gallery image 2',
        },
        {
          src: '/images/footer-gallery/img3.jpg',
          alt: 'Gallery image 3',
        },
        {
          src: '/images/footer-gallery/img4.jpg',
          alt: 'Gallery image 4',
        },
        {
          src: '/images/footer-gallery/img5.jpg',
          alt: 'Gallery image 5',
        },
        {
          src: '/images/footer-gallery/img6.jpg',
          alt: 'Gallery image 6',
        },
      ],
    },
  ],
};
