import { dashboard, edmi, koin, onboard, shirt, traxo, tsl } from '../assets'

export const PROJECTS = [
  {
    name: 'Onboard',
    description: 'Business, tourism and education travels and bookings.',
    url: 'https://onboard.com.ng',
    image: onboard,
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "material ui", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
  },
  {
    name: 'Three-Shirt',
    description: 'Style a shirt in 3D; change logo, color, full decals.',
    url: 'https://3-shirt.vercel.app',
    image: shirt,
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
  },
  {
    name: 'Admin Dashboard',
    description: 'Dashboard with reports, employee, customer and order record.',
    url: 'https://c-dashboard.vercel.app',
    image: dashboard,
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "syncfusion", color: "green-text-gradient" },
    ],
  },
  {
    name: 'TSL',
    description: 'Mock website of TSL.',
    url: 'https://tech-solutions.vercel.app/',
    image: tsl,
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
  },
  // {
  //   name: 'Ekunola Davies Ministry Intl',
  //   description: 'The mock website of Ekunola Davies Ministry Int\'l.',
  //   url: 'https://edmi-delta.vercel.app',
  //   image: edmi,
  //   tags: [
  //     { name: "react", color: "blue-text-gradient" },
  //     { name: "tailwindcss", color: "pink-text-gradient" },
  //   ],
  // },
  {
    name: 'Koin',
    description: 'Mock landing page for cryptocurrency with metamask connect.',
    url: 'https://koin-token.vercel.app',
    image: koin,
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
  },
  {
    name: 'Traxo',
    description: 'MVP for a finance management and auditing solution.',
    url: 'https://master.d16z9rxqclx4lm.amplifyapp.com/',
    image: traxo,
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
  },
]