import { useLayoutEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import Header from '../header/header';

interface HeroContainerProps {
  coords: { x: number; y: number };
}
const HeroSection = styled.section<HeroContainerProps>`
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  background: ${({ coords: { x, y } }) =>
    `radial-gradient(40rem 40rem at ${x}% ${y}%, #00115e, transparent)`};
`;

const HeroContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-bottom: 2rem;
  cursor: default;
`;

const TextWrapper = styled.div`
  text-align: center;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .hero-intro-text {
    font-size: 2rem;
    font-family: 'Courier Prime', 'Courier New', Courier, monospace;
    font-weight: 500;
    color: #b8b8b8;
  }

  .hero-main-text {
    font-size: 4rem;
    font-weight: 500;
    line-height: 5rem;
    background-clip: text;
    background: linear-gradient(180deg, #bbbbbb 10%, #afafaf 40%, #797979 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function Hero(): React.ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 100, y: -10 });

  useLayoutEffect(() => {
    if (containerRef.current != null) {
      containerRef.current.addEventListener('mousemove', (e) => {
        // TODO: account for scrolled height
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setCoords({ x, y });
      });
    }
  }, []);

  return (
    <HeroSection className="hero-section" ref={containerRef} coords={coords}>
      <Header />
      <HeroContent className="hero-content">
        <TextWrapper>
          <span className="hero-intro-text">{"Hi, I'm Lex 👋"}</span>
          <span className="hero-main-text">
            I build practical tools and magical web experiences
          </span>
        </TextWrapper>
      </HeroContent>
    </HeroSection>
  );
}
