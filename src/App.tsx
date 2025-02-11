import { type ReactNode } from 'react';
import { styled } from 'styled-components';

// import Contact from './components/contact/contact';
import Expertise from './components/about/expertise';
import Hobby from './components/about/hobby';
import Stack from './components/about/stack';
import Banner from './components/banner/banner';
import Hero from './components/hero/hero';

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
      <Expertise />
      <Hobby />
      {/* <Contact /> */}
    </Container>
  );
}

export default App;
