import { type ReactNode } from 'react';
import { styled } from 'styled-components';

import Contact from './components/contact/contact';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Stack from './components/stack/stack';

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  user-select: none;
`;

function App(): ReactNode {
  return (
    <Container className="container">
      <Hero />
      <Stack />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
