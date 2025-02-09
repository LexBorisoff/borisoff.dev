import { type ReactNode } from 'react';
import { styled } from 'styled-components';

import Banner from './components/banner/banner';
import Contact from './components/contact/contact';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Stack from './components/stack/stack';

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`;

function App(): ReactNode {
  return (
    <Container className="container">
      <Banner>🚧 This website is currently under construction 🚧</Banner>
      <Hero />
      <Stack />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
