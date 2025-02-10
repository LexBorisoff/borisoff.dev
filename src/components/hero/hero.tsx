import { useLayoutEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import Header from '../header/header';

const gridLineColor = '#81818127';
const HeroSection = styled.section`
  position: relative;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  background-size: 3rem 3rem;
  background-image: linear-gradient(
      to right,
      ${gridLineColor} 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, ${gridLineColor} 1px, transparent 1px);
`;

interface HeroMaskProps {
  coords: { x: number; y: number };
}
const HeroMask = styled.div<HeroMaskProps>`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex: 1;
  background: ${({ coords: { x, y } }) =>
    `radial-gradient(40rem 40rem at ${x}% ${y}%, #00115e8c, transparent)`};
`;

const HeroContent = styled.div`
  z-index: 1;
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
    const ref = containerRef.current;

    function callback(e: MouseEvent): void {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = ((e.clientY + window.scrollY) / window.innerHeight) * 100;
      setCoords({ x, y });
    }

    if (ref != null) {
      ref.addEventListener('mousemove', callback);
    }

    return () => {
      if (ref != null) {
        ref.removeEventListener('mousemove', callback);
      }
    };
  }, []);

  return (
    <HeroSection className="hero-section" ref={containerRef}>
      <HeroMask coords={coords} />
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
