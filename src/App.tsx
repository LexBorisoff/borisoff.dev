import { type ReactNode } from 'react';
import { styled } from 'styled-components';

import Banner from './components/banner/banner';
// import Contact from './components/contact/contact';
import Hero from './components/hero/hero';
import Packages from './components/packages/packages';
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
      <Stack />
      <Packages />
      {/* <Contact /> */}
    </Container>
  );
}

export default App;
