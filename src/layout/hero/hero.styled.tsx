import { css, styled } from 'styled-components';

import { media } from '../../theme/media';

export const HeroSection = styled.section`
  position: relative;
  height: 105vh;
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

export const HeroContent = styled.div`
  z-index: 1;
  flex: 1;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const TextWrapper = styled.div`
  text-align: center;
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  ${media.lg} {
    max-width: 55rem;
  }

  ${media.md} {
    max-width: 45rem;
  }

  ${media.sm} {
    max-width: 30rem;
  }

  ${media.xs} {
    max-width: 25rem;
    gap: 0.7rem;
  }
`;

export const HeroIntroText = styled.div`
  color: #dcdcdc;
  padding: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    #02fcef70 0,
    #ffb52b70 50%,
    #a02bfe70 100%
  );

  span {
    font-size: 1.6rem;
    display: grid;
    place-content: center;
    background-color: #000000d9;
    border-radius: 2rem;
    padding: 0.3rem 2rem;

    ${media.lg} {
      font-size: 1.4rem;
    }

    ${media.md} {
      font-size: 1.2rem;
    }

    ${media.sm} {
      font-size: 1rem;
    }

    ${media.xs} {
      font-size: 0.8rem;
    }
  }
`;

export const HeroMainText = styled.span`
  font-size: 4.4rem;
  padding: 0 4rem;
  font-weight: 600;
  line-height: 1.25;
  background: linear-gradient(135deg, #ebebeb 30%, #6c75b5 80%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.lg} {
    padding: 0 3rem;
    font-size: 4rem;
  }

  ${media.md} {
    padding: 0 5rem;
    font-size: 3.7rem;
  }

  ${media.sm} {
    padding: 0 2rem;
    font-size: 3.3rem;
  }

  ${media.xs} {
    font-size: 3rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const linkCss = css`
  text-decoration: none;
`;

const buttonCss = css`
  border: none;
  outline: none;
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  .hero-link-icon {
    height: 1.2rem;
    width: 1.2rem;
  }
`;

export const GithubButton = styled.a`
  ${linkCss}

  button {
    ${buttonCss}
    background: linear-gradient(45deg, #d81d1d 10%, #8c109a 50%, #172696 90%);
    color: #ffffff;
    transition: box-shadow 0.2s linear;

    &:hover {
      box-shadow: 0 0 0.4rem 0.1rem #ffffff;
      background: linear-gradient(
        135deg,
        #d81d1d 10%,
        #8c109a 50%,
        #172696 90%
      );
    }
  }
`;
