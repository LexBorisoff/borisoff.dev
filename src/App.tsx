import { type ReactNode } from 'react';
import { styled } from 'styled-components';

// import Contact from './components/contact/contact';
import Banner from './components/banner/banner';
import Expertise from './layout/expertise/expertise';
import Hero from './layout/hero/hero';
import Projects from './layout/projects/projects';
import Stack from './layout/stack/stack';

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
