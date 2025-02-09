import { styled } from 'styled-components';

const ProjectsSection = styled.section`
  height: 30rem;
  background-image: radial-gradient(#3f3f3f 1px, transparent 0);
  background-size: 3rem 3rem;
`;

export default function Projects(): React.ReactNode {
  return (
    <ProjectsSection className="projects-container">projects</ProjectsSection>
  );
}
