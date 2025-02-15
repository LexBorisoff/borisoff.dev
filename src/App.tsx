import { type ReactNode } from 'react';
import { styled } from 'styled-components';

// import Contact from './components/contact/contact';
import Banner from './components/banner/banner';
import Expertise from './components/expertise/expertise';
import Hero from './components/hero/hero';
import Hobby from './components/pet-projects/pet-projects';
import Stack from './components/stack/stack';

const UNDER_CONSTRUCTION = import.meta.env.VITE_UNDER_CONSTRUCTION === 'true';

const Container = styled.div`
  width: 100%;
  color: white;
`;

function App(): ReactNode {
  return (
    <Container className="container">
      {UNDER_CONSTRUCTION && (
        <Banner>🚧 This website is under construction 🚧</Banner>
      )}

      <Hero />
      <Expertise />
      <Hobby />
      <Stack />
      {/* <Contact /> */}
    </Container>
  );
}

export default App;
