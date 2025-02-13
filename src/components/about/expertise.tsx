import { useEffect, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { BsDatabaseLock } from 'react-icons/bs';
import { GoShieldLock } from 'react-icons/go';
import { LuServer } from 'react-icons/lu';
import { MdOutlineSettings } from 'react-icons/md';
import { styled, keyframes, css } from 'styled-components';

import Title, { Subtitle } from '../title/title';

type AppStateType = 'initial' | 'frontend' | 'backend' | 'fullstack';

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

const adjectiveAnimation = {
  time: 0.5,
  delay: 2.5,
} as const;

const ExpertiseSection = styled.section`
  position: relative;
  height: 95vh;
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
    ${enter} ${adjectiveAnimation.time}s forwards,
    ${exit} ${adjectiveAnimation.time}s ${adjectiveAnimation.delay}s ease-in-out
      forwards;
`;

/* DRAGGING */
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

const draggingFrontendCss = css`
  background-color: #8a00e65a;
  background-size: 2rem 2rem;
  background-image: linear-gradient(to right, #8a00e642 1px, transparent 1px),
    linear-gradient(to bottom, #8a00e642 1px, transparent 1px);
  background-position: -1rem -1rem;

  span {
    display: inline-block;
    padding: 1rem;
    background-color: #8a00e6d8;
    border-radius: 1rem;
  }
`;

const draggingBackendCss = css`
  background-color: #99000060;
  background-size: 2rem 2rem;
  background-image: linear-gradient(to right, #be02022b 1px, transparent 1px),
    linear-gradient(to bottom, #be02022b 1px, transparent 1px);
  background-position: -1rem -1rem;

  span {
    display: inline-block;
    padding: 1rem;
    background-color: #8a0101dd;
    border-radius: 1rem;
  }
`;

interface DraggableProps {
  $dragging?: boolean;
}

const draggableCss = css`
  position: absolute;
  top: calc(50% - 35vh / 2);
  height: 35vh;
  width: 35vh;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  place-content: center;
  text-align: center;
  cursor: grab;
  font-size: 1.5rem;
  pointer-events: all;
  backdrop-filter: blur(3px);
`;

const DraggableFrontend = styled.div<DraggableProps>`
  ${draggableCss}
  left: 5%;
  border: 0.3rem dashed #8a00e6ae;

  ${({ $dragging }) => $dragging && draggingFrontendCss}

  &:hover {
    ${draggingFrontendCss}
  }
`;

const DraggableBackend = styled.div<DraggableProps>`
  ${draggableCss}
  right: 5%;
  border: 0.3rem dashed #be0202d2;

  ${({ $dragging }) => $dragging && draggingBackendCss}

  &:hover {
    ${draggingBackendCss}
  }
`;

/* MOVING DASHES */
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

interface MovingDashesProps {
  $direction: 'right' | 'left';
  $position: 'right' | 'left';
}
const MovingDashes = styled.div<MovingDashesProps>`
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

interface BackendDashesProps {
  $direction?: 'right' | 'left';
}
const BackendDashes = styled.div<BackendDashesProps>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  height: 0.3rem;
  width: 30%;
  border-radius: 1rem;
  background: linear-gradient(to right, #e2e2e242 0.3rem, transparent 0.3rem);
  background-size: 0.6rem 100%;
  animation: ${({ $direction = 'right' }) =>
      $direction === 'right' ? moveDashesRight : moveDashesLeft}
    4s linear infinite;
`;

/* APP */
const FrontendWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const BackendWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  .backend-cog-wheel-right {
    animation: rotate 3s linear infinite;
  }
  .backend-cog-wheel-left {
    animation: rotate 3s linear infinite reverse;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const BackendSection = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AppHeader = styled.div`
  flex: 0.2;
  border-bottom: 0.3rem solid #d3d3d3;
`;

const AppMain = styled.div`
  flex: 0.6;
  display: flex;
`;

const AppSidebarLeft = styled.div`
  flex: 0.25;
  border-right: 0.3rem solid #d3d3d3;
`;

const AppSidebarRight = styled.div`
  flex: 0.25;
  border-left: 0.3rem solid #d3d3d3;
`;

const AppMainContent = styled.div`
  flex: 0.5;
`;

const AppFooter = styled.div`
  flex: 0.2;
  border-top: 0.3rem solid #d3d3d3;
`;

const appCss = {
  initial: css`
    border: 0.3rem dashed #183594;
    border-radius: 1rem;
    background-color: #1835945e;
    background-size: 4rem 4rem;
    background-image: linear-gradient(to right, #183594 1px, transparent 1px),
      linear-gradient(to bottom, #183594 1px, transparent 1px);
    background-position: -2rem -2rem;
  `,
  frontend: css`
    background-color: #9402c08f;
    border: 0.3rem solid #d3d3d3;
    border-radius: 1rem;
  `,
  backend: css`
    background-color: #7c00008b;
    border: 0.3rem solid #7c00008b;
    border-radius: 1rem;
  `,
} as const;

interface AppProps {
  $state?: AppStateType;
  $draggingFrontend?: boolean;
  $draggingBackend?: boolean;
}
const App = styled.div<AppProps>`
  position: relative;
  top: 50%;
  left: 50%;
  height: 45vh;
  width: 45vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(3px);
  overflow: hidden;

  ${({ $state = 'initial' }) => {
    if ($state === 'fullstack') {
      return css`
        ${appCss.frontend}
        box-shadow: 0 0 1rem 0.2rem #b4b4b4;

        .frontend-component {
          background-color: #008f00c3;
        }

        ${BackendWrapper} {
          filter: blur(2px);
        }
      `;
    }

    if ($state === 'frontend') {
      return appCss.frontend;
    }

    if ($state === 'backend') {
      return appCss.backend;
    }

    return appCss.initial;
  }};

  ${({ $draggingFrontend = false, $draggingBackend = false }) =>
    $draggingFrontend
      ? css`
          box-shadow: 0 0 1rem 0.5rem #8a00e6ae;
        `
      : $draggingBackend
        ? css`
            box-shadow: 0 0 1rem 0.5rem #be0202d2;
          `
        : null};
`;

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
  const [appState, setAppState] = useState<AppStateType>('initial');
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
      (adjectiveAnimation.time + adjectiveAnimation.delay) * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const frontend = frontendRef.current;
    const backend = backendRef.current;

    function handleDragging(side: keyof FullstackState) {
      return function handle() {
        setDragging((prev) => ({ ...prev, [side]: true }));
      };
    }

    const dragFE = handleDragging('frontend');
    const dragBE = handleDragging('backend');
    function drop(): void {
      setDragging(initialFullstackState);
    }

    if (container != null) {
      container.addEventListener('mouseup', drop);
    }
    if (frontend != null) {
      frontend.addEventListener('mousedown', dragFE);
    }
    if (backend != null) {
      backend.addEventListener('mousedown', dragBE);
    }

    return () => {
      if (container != null) {
        container.removeEventListener('mouseup', drop);
      }
      if (frontend != null) {
        frontend.removeEventListener('mousedown', dragFE);
      }
      if (backend != null) {
        backend.removeEventListener('mousedown', dragBE);
      }
    };
  }, [appState]);

  const isPainted = useMemo(
    () => appState === 'frontend' || appState === 'fullstack',
    [appState],
  );

  const isFunctional = useMemo(
    () => appState === 'backend' || appState === 'fullstack',
    [appState],
  );

  const testingButtons = true;

  return (
    <ExpertiseSection>
      <Title css={{ marginBottom: 0 }}>My Expertise & Passion</Title>
      <Subtitle>
        Building <AdjectiveSpan key={adjective}>{adjective}</AdjectiveSpan> web
        applications
      </Subtitle>

      {testingButtons && (
        <div>
          <button
            onClick={() => {
              setAppState('initial');
            }}
          >
            initial
          </button>
          <button
            onClick={() => {
              setAppState('frontend');
            }}
          >
            frontend
          </button>
          <button
            onClick={() => {
              setAppState('backend');
            }}
          >
            backend
          </button>
          <button
            onClick={() => {
              setAppState('fullstack');
            }}
          >
            fullstack
          </button>
        </div>
      )}

      <DragContainer ref={containerRef}>
        {appState !== 'frontend' && appState !== 'fullstack' && (
          <MovingDashes $position="left" $direction="right" />
        )}

        {appState !== 'backend' && appState !== 'fullstack' && (
          <MovingDashes $position="right" $direction="left" />
        )}

        <App
          $state={appState}
          $draggingFrontend={dragging.frontend}
          $draggingBackend={dragging.backend}
        >
          {isFunctional && (
            <BackendWrapper className="backend-wrapper">
              <BackendSection>
                <BackendDashes />
                <BsDatabaseLock size="4rem" />
                <MdOutlineSettings
                  className="backend-cog-wheel-right"
                  size="3rem"
                />
                <BsDatabaseLock size="4rem" />
              </BackendSection>

              <BackendSection>
                <BackendDashes $direction="left" />
                <GoShieldLock size="4rem" />
                <MdOutlineSettings
                  className="backend-cog-wheel-left"
                  size="3rem"
                />
                <GoShieldLock size="4rem" />
              </BackendSection>

              <BackendSection>
                <BackendDashes />
                <LuServer size="4rem" />
                <MdOutlineSettings
                  className="backend-cog-wheel-right"
                  size="3rem"
                />
                <LuServer size="4rem" />
              </BackendSection>
            </BackendWrapper>
          )}

          {isPainted && (
            <FrontendWrapper className="frontend-wrapper">
              <AppHeader className="frontend-component" />
              <AppMain className="frontend-component">
                <AppSidebarLeft />
                <AppMainContent />
                <AppSidebarRight />
              </AppMain>
              <AppFooter className="frontend-component" />
            </FrontendWrapper>
          )}
        </App>

        {appState !== 'backend' && appState !== 'fullstack' && (
          <BackendBounds>
            <Draggable bounds="parent">
              <DraggableBackend ref={backendRef} $dragging={dragging.backend}>
                <span>Backend</span>
              </DraggableBackend>
            </Draggable>
          </BackendBounds>
        )}

        {appState !== 'frontend' && appState !== 'fullstack' && (
          <FrontendBounds>
            <Draggable bounds="parent">
              <DraggableFrontend
                ref={frontendRef}
                $dragging={dragging.frontend}
              >
                <span>Frontend</span>
              </DraggableFrontend>
            </Draggable>
          </FrontendBounds>
        )}
      </DragContainer>
    </ExpertiseSection>
  );
}
