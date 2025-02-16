import { styled, keyframes, css } from 'styled-components';

const gap = '5rem';

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - ${gap}));
  }
`;

export const StackSection = styled.section`
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
  $pauseAnimation: boolean;
}

export const Slider = styled.div<SliderProps>`
  display: flex;
  gap: ${gap};

  ${({ $startAnimation }) =>
    $startAnimation
      ? css`
          animation: ${slide} 45s linear infinite;
        `
      : null}

  ${({ $pauseAnimation }) =>
    $pauseAnimation
      ? css`
          animation-play-state: paused;
        `
      : null}
`;

const maskImage = `linear-gradient(90deg,transparent 0,#000000 15%,#000000 85%,transparent 100%)`;

export const SliderWrapper = styled.div`
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

export const Logo = styled.div`
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
