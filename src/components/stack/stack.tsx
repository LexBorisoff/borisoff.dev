import { useMemo } from 'react';
import { keyframes, styled } from 'styled-components';

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

const maskImage = `linear-gradient(450deg,transparent 0,#000000 15%,#000000 85%,transparent 100%)`;

const StackContainer = styled.div`
  width: 100%;
  min-width: 500px;
  background: #131313;
  border-top: 1px solid #1d1d1d;
  border-bottom: 1px solid #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0 3rem 3rem;
`;

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

const Slider = styled.div`
  display: flex;
  gap: ${gap};
  animation: ${slide} 60s linear infinite;
`;

const Logo = styled.div`
  min-width: 6rem;
  height: 6rem;
  border-radius: 1rem;
  overflow: hidden;
  object-fit: contain;

  img {
    filter: grayscale(100%);
    transition: filter 0.5s;
  }

  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`;

export default function Stack(): React.ReactNode {
  const logos = useMemo(
    () =>
      stackLogos.map(({ src, alt, name }) => (
        <Logo key={name} className="stack-logo" title={name}>
          <img src={src} alt={alt} height="100%" />
        </Logo>
      )),
    [],
  );

  return (
    <StackContainer className="stack-container">
      <Title>My Stack</Title>
      <SliderWrapper className="logos-wrapper">
        <Slider>{logos}</Slider>
        <Slider>{logos}</Slider>
      </SliderWrapper>
    </StackContainer>
  );
}
