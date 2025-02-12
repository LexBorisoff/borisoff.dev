import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { styled, keyframes, css } from 'styled-components';

import Title, { Subtitle } from '../title/title';

const animation = {
  time: 0.5,
  delay: 4.5,
} as const;

const ExpertiseSection = styled.section`
  position: relative;
  height: 90vh;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  user-select: none;
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

const DragContainer = styled.div`
  position: relative;
  flex: 1 100%;
  width: 95%;
  display: flex;
  background: #4949491d;
  border: 0.4rem dotted #363636a6;
  border-radius: 1rem;
`;

const FrontendBounds = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(50% + 45vh * 0.5);
  pointer-events: none;
`;

const BackendBounds = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: calc(50% + 45vh * 0.5);
  pointer-events: none;
`;

const moveDashesRight = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 4rem 0;
  }
`;

const moveDashesLeft = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -4rem 0;
  }
`;

interface ProcessLineProps {
  $direction: 'right' | 'left';
  $position: 'right' | 'left';
}
const ProcessLine = styled.div<ProcessLineProps>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  height: 0.5rem;
  width: 42%;
  border-radius: 1rem;
  background: linear-gradient(to right, #3636369d 1rem, transparent 1rem);
  background-size: 2rem 100%;
  ${({ $position }) => css`
    ${$position}: 5%;
  `}

  ${({ $direction }) => {
    if ($direction === 'right') {
      return css`
        animation: ${moveDashesRight} 2s linear infinite;
      `;
    }
    if ($direction === 'left') {
      return css`
        animation: ${moveDashesLeft} 2s linear infinite;
      `;
    }
    return null;
  }}
`;

type AppStateType = 'initial' | 'frontend' | 'backend' | 'fullstack';

const appCss: Record<AppStateType, ReturnType<typeof css>> = {
  initial: css`
    border: 0.3rem dashed #183594;
    border-radius: 1rem;
    display: grid;
    place-content: center;
    overflow: hidden;
    background-color: #1835945e;
    background-size: 4rem 4rem;
    background-image: linear-gradient(to right, #183594 1px, transparent 1px),
      linear-gradient(to bottom, #183594 1px, transparent 1px);
  `,
  frontend: css``,
  backend: css``,
  fullstack: css``,
};

interface AppProps {
  $state: AppStateType;
}

const App = styled.div<AppProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 45vh;
  width: 45vh;
  transform: translate(-50%, -50%);

  ${({ $state = 'initial' }) => appCss[$state]}
`;

interface DraggingProps {
  $dragging?: boolean;
}

const draggingFrontendCss = css`
  background-color: #8a00e65a;
  background-size: 2rem 2rem;
  background-image: linear-gradient(to right, #8a00e6ae 1px, transparent 1px),
    linear-gradient(to bottom, #8a00e6ae 1px, transparent 1px);
`;

const draggingBackendCss = css`
  background-color: #990000a7;
  background-size: 2rem 2rem;
  background-image: linear-gradient(to right, #be0202d2 1px, transparent 1px),
    linear-gradient(to bottom, #be0202d2 1px, transparent 1px);
`;

const DraggableFrontend = styled.div<DraggingProps>`
  position: absolute;
  top: 5%;
  left: 5%;
  height: 35vh;
  width: 35vh;
  padding: 2rem;
  border: 0.3rem dashed #8a00e6ae;
  border-radius: 1rem;
  display: grid;
  place-content: center;
  text-align: center;
  cursor: grab;
  font-size: 1.2rem;
  pointer-events: all;

  ${({ $dragging }) => $dragging && draggingFrontendCss}

  &:hover {
    ${draggingFrontendCss}
  }
`;

const DraggableBackend = styled.div<DraggingProps>`
  position: absolute;
  bottom: 5%;
  right: 5%;
  height: 35vh;
  width: 35vh;
  padding: 2rem;
  border: 0.3rem dashed #be0202d2;
  border-radius: 1rem;
  display: grid;
  place-content: center;
  text-align: center;
  font-size: 1.2rem;
  cursor: grab;
  pointer-events: all;

  ${({ $dragging }) => $dragging && draggingBackendCss}

  &:hover {
    ${draggingBackendCss}
  }
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

interface FullstackState {
  frontend: boolean;
  backend: boolean;
}

const initialFullstackState: FullstackState = {
  frontend: false,
  backend: false,
};

export default function Expertise(): React.ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);

  const [adjective, setAdjective] = useState(adjectives[0]);
  const [dropped, setDropped] = useState<FullstackState>(initialFullstackState);
  const [dragging, setDragging] = useState<FullstackState>(
    initialFullstackState,
  );

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

  useEffect(() => {
    const container = containerRef.current;
    const frontend = frontendRef.current;
    const backend = backendRef.current;

    function handleDragging(side: keyof FullstackState, value: boolean) {
      return function () {
        setDragging((prev) => ({ ...prev, [side]: value }));
      };
    }

    const dragFE = handleDragging('frontend', true);
    const dragBE = handleDragging('backend', true);
    function drop(): void {
      setDragging(initialFullstackState);
    }

    if (container != null && frontend != null && backend != null) {
      frontend.addEventListener('mousedown', dragFE);
      backend.addEventListener('mousedown', dragBE);
      container.addEventListener('mouseup', drop);
    }

    return () => {
      if (container != null && frontend != null && backend != null) {
        frontend.removeEventListener('mousedown', dragFE);
        backend.removeEventListener('mousedown', dragBE);
        container.removeEventListener('mouseup', drop);
      }
    };
  }, []);

  return (
    <ExpertiseSection>
      <Title css={{ marginBottom: 0 }}>My Expertise & Passion</Title>
      <Subtitle>
        Building <AdjectiveSpan key={adjective}>{adjective}</AdjectiveSpan> web
        applications
      </Subtitle>

      <DragContainer ref={containerRef}>
        <ProcessLine $position="left" $direction="right" />
        <ProcessLine $position="right" $direction="left" />
        <App $state="initial" />

        <BackendBounds>
          <Draggable bounds="parent">
            <DraggableBackend ref={backendRef} $dragging={dragging.backend}>
              Backend
            </DraggableBackend>
          </Draggable>
        </BackendBounds>

        <FrontendBounds>
          <Draggable bounds="parent">
            <DraggableFrontend ref={frontendRef} $dragging={dragging.frontend}>
              Frontend
            </DraggableFrontend>
          </Draggable>
        </FrontendBounds>
      </DragContainer>
    </ExpertiseSection>
  );
}
