import { css, styled } from 'styled-components';

import { media } from '../../../theme/media';

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 550px;
  max-height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #0f0f0f;
  background-size: 3rem 3rem;
  background-image: linear-gradient(to right, #81818127 1px, transparent 1px),
    linear-gradient(to bottom, #81818127 1px, transparent 1px);
  background-position: -2px -2px;
  mask-image: linear-gradient(#000000 85%, transparent 100%);

  ${media.md} {
    max-height: 500px;
  }

  ${media.sm} {
    max-height: 300px;
  }
`;

function sectionMaskBackground(x: number, y: number): ReturnType<typeof css> {
  return css`
    background: radial-gradient(
        ${x}rem ${y}rem at 10% 0%,
        #00115e76,
        transparent
      ),
      radial-gradient(${x}rem ${y}rem at 0% 100%, #5e000058, transparent),
      radial-gradient(${x}rem ${y}rem at 100% 0%, #6e003c70, transparent),
      radial-gradient(${x}rem ${y}rem at 90% 100%, #6e54005a, transparent);
  `;
}

export const SectionMask = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex: 1;
  ${sectionMaskBackground(40, 40)}

  ${media.lg} {
    ${sectionMaskBackground(30, 30)}
  }

  ${media.md} {
    ${sectionMaskBackground(25, 25)}
  }

  ${media.sm} {
    ${sectionMaskBackground(20, 25)}
  }

  ${media.xs} {
    ${sectionMaskBackground(15, 20)}
  }
`;
