import { css, styled } from 'styled-components';

import { media } from '../../../theme/media';

export const HeroContent = styled.div`
  z-index: 1;
  flex: 1;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: default;
`;

export const TextWrapper = styled.div`
  text-align: center;
  max-width: 55rem;
  display: flex;
  flex-flow: column nowrap;
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

export const HeroTitleText = styled.div`
  color: #dcdcdc;
  padding: 0.15rem;
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

  &:hover {
    span {
      background-color: #0000008f;
    }
  }

  span {
    font-size: 1.4rem;
    display: flex;
    place-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: #000000d9;
    border-radius: 2rem;
    padding: 0.3rem 1rem;
    transition: background 0.2s;

    .full-stack-hero-icon {
      height: 1.5rem;
      width: 1.5rem;
    }

    ${media.lg} {
      font-size: 1.3rem;
    }

    ${media.md} {
      font-size: 1.2rem;
    }

    ${media.sm} {
      font-size: 1.1rem;
    }

    ${media.xs} {
      font-size: 1rem;
    }
  }
`;

export const HeroNameText = styled.span`
  font-size: 6.5rem;
  padding: 0 1rem;
  font-weight: 600;
  line-height: 1.25;
  background: linear-gradient(135deg, #ebebeb 30%, #6c75b5 80%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${media.lg} {
    font-size: 6rem;
  }

  ${media.md} {
    font-size: 5.5rem;
  }

  ${media.sm} {
    font-size: 4.5rem;
  }

  ${media.xs} {
    font-size: 3.5rem;
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
    transition: box-shadow 0.1s linear;

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
