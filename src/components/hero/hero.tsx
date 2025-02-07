import { styled } from 'styled-components';

import Header from '../header/header';

const HeroContainer = styled.div`
  height: 40rem;
`;

export default function Hero(): React.ReactNode {
  return (
    <HeroContainer className="hero-container">
      <Header />
      hero
    </HeroContainer>
  );
}
