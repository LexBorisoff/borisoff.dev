import { styled } from 'styled-components';

import Title, { Subtitle } from '../title/title';

const ExpertiseSection = styled.section`
  position: relative;
  height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const adjectives = [
  'elegant',
  'responsive',
  'user-centric',
  'data-driven',
  'scalable',
  'feature-rich',
  'dynamic',
  'intuitive',
  'versatile',
  'sophisticated',
  'robust',
  'secure',
];

export default function Expertise(): React.ReactNode {
  return (
    <ExpertiseSection>
      <Title css={{ marginBottom: 0 }}>My Expertise & Passion</Title>
      <Subtitle>Building elegant web applications</Subtitle>
    </ExpertiseSection>
  );
}
