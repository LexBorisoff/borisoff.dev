import { styled } from 'styled-components';

import Title from '../title/title';

import { projects } from './projects-data';

const ProjectsSection = styled.section`
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

const ProjectsContainer = styled.div`
  flex: 1;
  /* width: 100%; */
  padding: 0.5rem 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  flex-wrap: wrap;
  overflow: auto;
  scrollbar-width: thin;
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
  max-width: 30rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid #242424;
  border-radius: 1rem;
  background: #0f0f0f;
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 5px 2px #1d1e64;
    border-color: #1d1e64;

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
  padding: 0;
  display: grid;
  place-content: center;
  background-size: 0.9rem 0.9rem;
  background-image: linear-gradient(
      to right,
      ${gridLineColor} 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, ${gridLineColor} 1px, transparent 1px);
`;

const ProjectInto = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-items: start;
`;

const ProjectTitle = styled.h4`
  white-space: nowrap;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #c6c6c6;
  font-family: 'Courier Prime', 'Courier New', Courier, monospace;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #c6c6c6;
`;

const DocsButton = styled.button`
  height: 2.5rem;
  border: none;
  color: white;
  cursor: pointer;
  display: grid;
  place-content: center;
  font-size: 1.2rem;
  font-family: 'Courier Prime', 'Courier New', Courier, monospace;
  background: #252525;
  transition: background 0.5s;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background: #1d1e64;
  }
`;

export default function Projects(): React.ReactNode {
  return (
    <ProjectsSection className="projects-container">
      <Title>Projects</Title>
      <ProjectsContainer>
        {projects.map(({ name, Icon, description, url }) => (
          <ProjectWrapper key={name}>
            <IconWrapper>
              <IconWrapperMask color="#00115e8c" coords={{ x: 90, y: 0 }} />
              <IconWrapperMask color="#5e00008b" coords={{ x: 0, y: 90 }} />
              <Icon size="3rem" />
            </IconWrapper>

            <ProjectInto>
              <ProjectTitle>{name}</ProjectTitle>
              <Description>{description}</Description>
            </ProjectInto>

            <DocsButton>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </DocsButton>
          </ProjectWrapper>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
}
