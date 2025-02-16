import { styled, css } from 'styled-components';

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
`;

export const EmailWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1.3rem;
    font-family: 'Courier Prime', 'Courier New', Courier, monospace;
    color: #d9d9d9;
  }
`;

export const LinksWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;

const iconCss = css`
  background: #2727277a;
  border: 1px solid #3a3a3a;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  display: grid;
  place-content: center;
  transition: background 0.2s;

  &:hover {
    background: #0c2576ab;
    border: 1px solid #475994ab;
  }
`;

interface IconWrapperProps {
  clickable?: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${iconCss}

  ${({ clickable }) =>
    clickable &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

export const LinkStyled = styled.a`
  color: inherit;
  text-decoration: none;
  ${iconCss}
`;
