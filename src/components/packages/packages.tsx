import { styled } from 'styled-components';

import Title from '../title/title';

import { nodeProjects } from './packages-data';

const ProjectsSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-image: radial-gradient(#3f3f3f 1px, transparent 0);
  background-size: 3rem 3rem;
  overflow: hidden;
  padding-bottom: 2rem;
`;

const Subtitle = styled.h3`
  z-index: 1;
  margin-bottom: 1.5rem;
  padding: 0;
  line-height: 1rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-style: italic;
  font-family: 'Courier Prime', 'Courier New', Courier, monospace;
  color: #c0c0c0;
  text-align: center;
  line-height: 1.2rem;

  #nodejs-subtitle-text {
    color: #059200;
    font-size: inherit;
    font-weight: bold;
    font-style: inherit;
    font-family: inherit;
  }
`;

const maskImage = `linear-gradient(450deg,transparent 0,#000000 5%,#000000 95%,transparent 100%)`;
const ProjectsContainer = styled.div`
  z-index: 1;
  flex: 1;
  width: 90%;
  max-width: 1200px;
  padding: 0.5rem 3rem 2rem;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 2rem;
  overflow: auto;
  scrollbar-width: thin;

  mask-image: ${maskImage};
  -webkit-mask-image: ${maskImage};
`;

interface IconWrapperMaskProps {
  color: string;
  coords: {
    x: number;
    y: number;
  };
}

const IconWrapperMask = styled.div<IconWrapperMaskProps>`
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

const ProjectWrapper = styled.div`
  flex: 1;
  min-width: 20rem;
  max-width: 20rem;
  min-height: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid #242424;
  border-radius: 1rem;
  background: #0f0f0f;
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 3px 2px #035e00a7;
    border-color: #035e00a7;

    ${IconWrapperMask} {
      visibility: visible;
    }
  }
`;

const gridLineColor = '#81818127';
const IconWrapper = styled.div`
  position: relative;
  text-align: center;
  height: 8rem;
  color: #c6c6c6;
  margin: 0;
  display: grid;
  place-content: center;
  background-size: 1rem 1rem;
  background-image: linear-gradient(
      to right,
      ${gridLineColor} 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, ${gridLineColor} 1px, transparent 1px);
  background-position: -2px -2px;
`;

const ProjectInto = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-items: start;
`;

const ProjectTitle = styled.div`
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

const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #c6c6c6;
`;

const DocsLink = styled.a`
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

    &:hover {
      background: #035e00a7;
    }
  }
`;

export default function Packages(): React.ReactNode {
  return (
    <ProjectsSection className="projects-container">
      <Title css={{ marginBottom: 0, zIndex: 1 }}>Packages</Title>
      <Subtitle>
        Check out my <span id="nodejs-subtitle-text">Node.js</span> libraries
        and CLIs.
      </Subtitle>

      <ProjectsContainer>
        {nodeProjects.map(({ name, Icon, description, url }) => (
          <ProjectWrapper key={name}>
            <IconWrapper>
              <IconWrapperMask color="#035e00a7" coords={{ x: 90, y: 0 }} />
              <IconWrapperMask color="#5e00008b" coords={{ x: 0, y: 90 }} />
              <Icon size="3rem" />
            </IconWrapper>

            <ProjectInto>
              <ProjectTitle>{name}</ProjectTitle>
              <Description>{description}</Description>
            </ProjectInto>

            <DocsLink href={url} target="_blank" rel="noopener noreferrer">
              <button>Docs</button>
            </DocsLink>
          </ProjectWrapper>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
}
