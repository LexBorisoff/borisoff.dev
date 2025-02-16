import Title, { Subtitle } from '../../components/title/title';

import { projects } from './projects-data';
import {
  DocsLink,
  IconWrapper,
  IconWrapperMask,
  ProjectContainer,
  ProjectDescription,
  ProjectInto,
  ProjectsSection,
  ProjectsWrapper,
  ProjectTitle,
  SubtitleSpan,
} from './projects.styled';

export default function Projects(): React.ReactNode {
  return (
    <ProjectsSection>
      <Title css={{ marginBottom: 0, zIndex: 1 }}>Pet Projects</Title>
      <Subtitle>
        Check out my <SubtitleSpan>libraries</SubtitleSpan> and DX{' '}
        <SubtitleSpan>tools</SubtitleSpan>
      </Subtitle>

      <ProjectsWrapper>
        {projects.map(({ name, Icon, description, url }) => (
          <ProjectContainer key={name}>
            <IconWrapper>
              <IconWrapperMask
                className="icon-wrapper-mask"
                color="#035e00a7"
                coords={{ x: 90, y: 0 }}
              />
              <IconWrapperMask
                className="icon-wrapper-mask"
                color="#5e00008b"
                coords={{ x: 0, y: 90 }}
              />
              <Icon size="3rem" />
            </IconWrapper>

            <ProjectInto>
              <ProjectTitle>{name}</ProjectTitle>
              <ProjectDescription>{description}</ProjectDescription>
            </ProjectInto>

            <DocsLink href={url} target="_blank" rel="noopener noreferrer">
              <button className="docs-link-button">Docs</button>
            </DocsLink>
          </ProjectContainer>
        ))}
      </ProjectsWrapper>
    </ProjectsSection>
  );
}
