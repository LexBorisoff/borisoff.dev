import { useEffect, useState } from 'react';
import { styled, keyframes } from 'styled-components';

import Title, { Subtitle } from '../title/title';

const animation = {
  time: 0.5,
  delay: 4.5,
} as const;

const ExpertiseSection = styled.section`
  position: relative;
  height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

const enter = keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const exit = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-20%);
    opacity: 0;
    visibility: hidden;
    display: none;
  }
`;

const AdjectiveSpan = styled.span`
  font: inherit;
  display: inline-block;
  color: #357dc0;
  font-weight: 600;

  animation:
    ${enter} ${animation.time}s forwards,
    ${exit} ${animation.time}s ${animation.delay}s ease-in-out forwards;
`;

const adjectives = [
  'robust',
  'secure',
  'elegant',
  'dynamic',
  'scalable',
  'versatile',
  'intuitive',
  'responsive',
  'data-driven',
  'user-centric',
  'feature-rich',
  'sophisticated',
];

export default function Expertise(): React.ReactNode {
  const [adjective, setAdjective] = useState(adjectives[0]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setAdjective((prev) => {
          const currentIndex = adjectives.indexOf(prev);
          const nextIndex =
            currentIndex < adjectives.length - 1 ? currentIndex + 1 : 0;
          return adjectives[nextIndex];
        });
      },
      (animation.time + animation.delay) * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <ExpertiseSection>
      <Title css={{ marginBottom: 0 }}>My Expertise & Passion</Title>
      <Subtitle>
        Building <AdjectiveSpan key={adjective}>{adjective}</AdjectiveSpan> web
        applications
      </Subtitle>
    </ExpertiseSection>
  );
}
