import { css, styled } from 'styled-components';

import { media } from '../../theme/media';

export const HeroSection = styled.section`
  position: relative;
  height: 105vh;
  min-height: 400px;
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

export const HeroContent = styled.div`
  z-index: 1;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const TextWrapper = styled.div`
  text-align: center;
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.lg} {
    max-width: 45rem;
  }

  ${media.md} {
    max-width: 40rem;
  }

  ${media.sm} {
    max-width: 30rem;
  }

  ${media.xs} {
    max-width: 25rem;
    gap: 0.7rem;
  }

  .hero-intro-text {
    font-size: 2rem;
    font-family: 'Courier Prime', 'Courier New', Courier, monospace;
    font-weight: 500;
    font-style: italic;
    color: #b8b8b8;

    ${media.lg} {
      font-size: 1.9rem;
    }

    ${media.md} {
      font-size: 1.7rem;
    }

    ${media.sm} {
      font-size: 1.5rem;
    }

    ${media.xs} {
      font-size: 1.3rem;
    }
  }

  .hero-main-text {
    font-size: 4rem;
    padding: 0 4rem;
    font-weight: 500;
    line-height: 1.25;
    background: linear-gradient(180deg, #bbbbbb 10%, #afafaf 40%, #797979 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${media.lg} {
      padding: 0 3rem;
      font-size: 3.4rem;
    }

    ${media.md} {
      padding: 0 5rem;
      font-size: 2.7rem;
    }

    ${media.sm} {
      padding: 0 2rem;
      font-size: 2.3rem;
    }

    ${media.xs} {
      font-size: 2rem;
    }
  }
`;
