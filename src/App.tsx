import { type ReactNode } from 'react';
import { styled } from 'styled-components';

// import Contact from './components/contact/contact';
import Banner from './components/banner/banner';
import Expertise from './sections/expertise/expertise';
import Hero from './sections/hero/hero';
import Projects from './sections/projects/projects';
import Stack from './sections/stack/stack';

const UNDER_CONSTRUCTION = import.meta.env.VITE_UNDER_CONSTRUCTION === 'true';

const AppContainer = styled.div`
  width: 100%;
  color: white;
`;

function App(): ReactNode {
  return (
    <AppContainer>
      {UNDER_CONSTRUCTION && (
        <Banner>🚧 This website is under construction 🚧</Banner>
      )}

      <Hero />
      <Expertise />
      <Projects />
      <Stack />
      {/* <Contact /> */}
    </AppContainer>
  );
}

export default App;
