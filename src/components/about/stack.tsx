import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { css, keyframes, styled } from 'styled-components';

import Title from '../title/title';

import { stackLogos } from './stack-logos';

const gap = '5rem';

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - ${gap}));
  }
`;

const StackSection = styled.section`
  width: 100%;
  background: #131313;
  border-top: 1px solid #1d1d1d;
  border-bottom: 1px solid #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  padding: 0 3rem 3rem;
`;

interface SliderProps {
  $startAnimation: boolean;
}
const Slider = styled.div<SliderProps>`
  display: flex;
  gap: ${gap};

  ${({ $startAnimation }) =>
    $startAnimation
      ? css`
          animation: ${slide} 45s linear infinite;
        `
      : null}
`;

const maskImage = `linear-gradient(90deg,transparent 0,#000000 15%,#000000 85%,transparent 100%)`;
const SliderWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  gap: ${gap};
  justify-content: start;
  align-items: center;
  scrollbar-width: thin;
  overflow: hidden;

  mask-image: ${maskImage};
  -webkit-mask-image: ${maskImage};
`;

const Logo = styled.div`
  min-width: 6rem;
  height: 6rem;
  border-radius: 0.7rem;
  overflow: hidden;
  object-fit: contain;

  img {
    transition: filter 0.5s;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

export default function Stack(): React.ReactNode {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [$startAnimation, setStartAnimation] = useState(false);

  // starts animation only when stack section is in view
  useLayoutEffect(() => {
    const ref = sliderRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setStartAnimation((prev) => prev || entry.isIntersecting);
    });

    if (ref != null) {
      observer.observe(ref);
    }

    return () => {
      if (ref != null) {
        observer.unobserve(ref);
      }
    };
  }, []);

  const logos = useMemo(
    () =>
      stackLogos.map(({ src, alt, name }) => (
        <Logo key={name} className="stack-logo" title={name}>
          <img src={src} alt={alt} height="100%" />
        </Logo>
      )),
    [],
  );

  const slider = useMemo(
    () => (
      <Slider $startAnimation={$startAnimation} className="stack-slider">
        {logos}
      </Slider>
    ),
    [logos, $startAnimation],
  );

  return (
    <StackSection className="stack-section">
      <Title>My Stack</Title>
      <SliderWrapper ref={sliderRef} className="stack-logos-wrapper">
        {slider}
        {slider}
      </SliderWrapper>
    </StackSection>
  );
}
