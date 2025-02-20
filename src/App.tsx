import { type ReactNode } from 'react';
import { styled } from 'styled-components';

import About from './layout/about/about';
import Hero from './layout/hero/hero';
import Projects from './layout/projects/projects';

const AppContainer = styled.div`
  width: 100%;
  color: white;
`;

function App(): ReactNode {
  return (
    <AppContainer>
      <Hero />
      <About />
      <Projects />
    </AppContainer>
  );
}

export default App;
