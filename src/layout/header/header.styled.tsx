import { styled } from 'styled-components';

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
  justify-content: space-between;
  align-items: center;

  ${media.md} {
    flex-flow: column nowrap;
    align-items: flex-end;
    gap: 0.5rem;
    margin: 1rem 2rem 0;
  }

  ${media.sm} {
    flex-flow: column nowrap;
    align-items: flex-end;
    gap: 0.5rem;
    margin: 1rem 1.3rem 0;
  }
`;

export const LinkWrapper = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: inherit;
  text-decoration: none;

  &:hover {
    .header-icon-wrapper {
      background: #0c2576ab;
      border: 1px solid #475994ab;
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

  ${media.md} {
    flex-flow: row-reverse nowrap;
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
