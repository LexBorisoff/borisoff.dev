import { css, styled } from 'styled-components';

import { media } from '../../theme/media';

export const HeaderSection = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  height: 100%;
  max-width: 1200px;
  flex: 1;
  margin: 0 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${media.lg} {
    gap: 0.75rem;
  }

  ${media.xs} {
    gap: 0.5rem;
  }
`;

const wrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  color: inherit;

  ${media.md} {
    gap: 0.7rem;
  }

  ${media.sm} {
    gap: 0.5rem;
  }

  &:hover {
    .header-icon-wrapper {
      background: #0c2576ab;
      border: 1px solid #475994ab;
      box-shadow: 0 0 0.5rem 0 #0c2576ab;
    }
  }

  span {
    font-size: 1.3rem;
    font-family: 'Courier Prime', 'Courier New', Courier, monospace;
    color: #d9d9d9;

    ${media.lg} {
      font-size: 1.1rem;
    }

    ${media.md} {
      font-size: 1rem;
    }
  }
`;

export const LinkWrapper = styled.a`
  ${wrapperCss}
  text-decoration: none;
`;

export const EmailWrapper = styled.div`
  ${wrapperCss}
  border: 1px solid #3a3a3a;
  border-left: none;
  border-radius: 2.5rem;
  padding-right: 1rem;
  background: #2727277a;

  &:hover {
    background: #0c2576ab;
    border: 1px solid #475994ab;
    border-left: none;
    box-shadow: 0 0 0.5rem 0 #0c2576ab;
  }
`;

export const IconWrapper = styled.div`
  background: #2727277a;
  border: 1px solid #3a3a3a;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  display: grid;
  place-content: center;
  transition: background 0.2s;

  .header-icon {
    height: 1.2rem;
    width: 1.2rem;
  }

  ${media.md} {
    height: 2.2rem;
    width: 2.2rem;

    .header-icon {
      height: 1rem;
      width: 1rem;
    }
  }

  ${media.sm} {
    height: 2rem;
    width: 2rem;

    .header-icon {
      height: 1rem;
      width: 1rem;
    }
  }
`;
