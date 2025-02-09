interface StackLogoInterface {
  name: string;
  src: string;
  alt: string;
}

function getUrl(logo: string): string {
  return `https://raw.githubusercontent.com/LexBorisoff/borisoff.dev/refs/heads/main/src/assets/stack/${logo}.png`;
}

export const stackLogos: StackLogoInterface[] = [
  {
    name: 'HTML',
    src: getUrl('html'),
    alt: 'HTML logo',
  },
  {
    name: 'CSS',
    src: getUrl('css'),
    alt: 'CSS logo',
  },
  {
    name: 'JavaScript',
    src: getUrl('javascript'),
    alt: 'JavaScript logo',
  },
  {
    name: 'TypeScript',
    src: getUrl('typescript'),
    alt: 'TypeScript logo',
  },
  {
    name: 'React',
    src: getUrl('react'),
    alt: 'React logo',
  },
  {
    name: 'Vite',
    src: getUrl('vite'),
    alt: 'Vite logo',
  },
  {
    name: 'Node.js',
    src: getUrl('nodejs'),
    alt: 'Node.js logo',
  },
  {
    name: 'Nest.js',
    src: getUrl('nestjs'),
    alt: 'Nest.js logo',
  },
  {
    name: 'PostgreSQL',
    src: getUrl('postgresql'),
    alt: 'PostgreSQL logo',
  },
];
