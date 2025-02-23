import css from '../../assets/stack/css.png';
import html from '../../assets/stack/html.png';
import javascript from '../../assets/stack/javascript.png';
import nestjs from '../../assets/stack/nestjs.png';
import nodejs from '../../assets/stack/nodejs.png';
import postgresql from '../../assets/stack/postgresql.png';
import react from '../../assets/stack/react.png';
import typescript from '../../assets/stack/typescript.png';
import vite from '../../assets/stack/vite.png';

interface StackLogoInterface {
  name: string;
  src: string;
  alt: string;
}

export const stackLogos: StackLogoInterface[] = [
  {
    name: 'HTML',
    src: html,
    alt: 'HTML logo',
  },
  {
    name: 'CSS',
    src: css,
    alt: 'CSS logo',
  },
  {
    name: 'JavaScript',
    src: javascript,
    alt: 'JavaScript logo',
  },
  {
    name: 'TypeScript',
    src: typescript,
    alt: 'TypeScript logo',
  },
  {
    name: 'React',
    src: react,
    alt: 'React logo',
  },
  {
    name: 'Vite',
    src: vite,
    alt: 'Vite logo',
  },
  {
    name: 'Node.js',
    src: nodejs,
    alt: 'Node.js logo',
  },
  {
    name: 'Nest.js',
    src: nestjs,
    alt: 'Nest.js logo',
  },
  {
    name: 'PostgreSQL',
    src: postgresql,
    alt: 'PostgreSQL logo',
  },
];
