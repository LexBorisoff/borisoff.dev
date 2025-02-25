import { styled } from 'styled-components';

export const ProjectsSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  padding-bottom: 2rem;
  border-top: 1px solid #181818;
  background: #111111;
`;

export const SubtitleSpan = styled.span`
  font: inherit;
  font-weight: 600;
  color: #058a00;
`;

export const ProjectsWrapper = styled.div`
  flex: 1;
  width: 90%;
  max-width: 1200px;
  padding: 0.5rem 1rem 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: start;
  gap: 2rem;
`;

export const ProjectContainer = styled.div`
  z-index: 1;
  flex: 1 1 17rem;
  max-width: 22rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid #242424;
  border-radius: 0.5rem;
  background: #0f0f0f;
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 0.7rem 0.1rem #035e00a7;
    border-color: #035e00a7;

    .icon-wrapper-mask {
      visibility: visible;
    }

    .docs-link-button {
      background: #035e00a7;
    }
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  text-align: center;
  height: 8rem;
  color: #c6c6c6;
  margin: 0;
  display: grid;
  place-content: center;
  background-size: 1rem 1rem;
  background-image: linear-gradient(to right, #81818127 1px, transparent 1px),
    linear-gradient(to bottom, #81818127 1px, transparent 1px);
  background-position: -2px -2px;
`;

interface IconWrapperMaskProps {
  color: string;
  coords: {
    x: number;
    y: number;
  };
}

export const IconWrapperMask = styled.div<IconWrapperMaskProps>`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex: 1;
  background: ${({ color, coords: { x, y } }) =>
    `radial-gradient(10rem 10rem at ${x}% ${y}%, ${color}, transparent)`};
  visibility: hidden;
`;

export const ProjectInto = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-items: start;
`;

export const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.7rem;
  font-weight: 600;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  color: #c6c6c6;
  font-family: 'Courier Prime', 'Courier New', Courier, monospace;
`;

export const ProjectDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #c6c6c6;
`;

export const DocsLink = styled.a`
  text-decoration: none;
  color: inherit;

  button {
    width: 100%;
    height: 2.5rem;
    border: none;
    outline: none;
    color: #e4e4e4;
    cursor: pointer;
    display: grid;
    place-content: center;
    font-size: 1.2rem;
    font-family: 'Courier Prime', 'Courier New', Courier, monospace;
    background: #252525;
    transition: background 0.5s;
  }
`;
