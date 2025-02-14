import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { BsDatabaseLock } from 'react-icons/bs';
import { GoShieldLock } from 'react-icons/go';
import { LuLayoutTemplate, LuPaintbrush } from 'react-icons/lu';
import { MdClose, MdOutlineSettings } from 'react-icons/md';
import { styled, keyframes, css } from 'styled-components';

import Title, { Subtitle } from '../title/title';

type AppStateType = 'initial' | 'frontend' | 'backend' | 'fullstack';

const adjectives = [
  'robust',
  'secure',
  'tested',
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

const draggableCss = css<DraggableProps>`
  position: absolute;
  top: calc(50% - 35vh / 2);
  height: 35vh;
  width: 35vh;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  place-content: center;
  text-align: center;
  cursor: ${({ $dragging }) => ($dragging ? 'grabbing' : 'grab')};
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
  $transform?: string;
}
const BackendDashes = styled.div<BackendDashesProps>`
  position: absolute;
  top: 50%;
  transform: ${({ $transform }) => `translate(0, ${$transform})`};
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
const BrowserHeader = styled.div`
  height: 2rem;
  width: 100%;
  border-bottom: 0.2rem solid #00000022;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3rem;
  padding: 0 1rem;
  background: #0000005c;
`;

const ResetButton = styled.button`
  position: absolute;
  top: 0.4rem;
  right: 0.6rem;
  border: none;
  outline: none;
  background: none;
  color: #ececec;
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  pointer-events: all;
  cursor: pointer;
  display: grid;
  place-content: center;
`;

const stackCss = css`
  width: 100%;
  flex: 0.5;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const FrontendWrapper = styled.div`
  ${stackCss}
`;

const BackendWrapper = styled.div`
  ${stackCss}
`;

const StackContent = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

interface AppHeaderCircleProps {
  $color: string;
}
const AppHeaderCircle = styled.div<AppHeaderCircleProps>`
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

const turningWheelsCss = css`
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

const background = css`
  background-color: #1835945e;
  background-size: 4rem 4rem;
  background-image: linear-gradient(to right, #183594 1px, transparent 1px),
    linear-gradient(to bottom, #183594 1px, transparent 1px);
  background-position: -2rem -2rem;
  border: 0.3rem dashed #183594;
`;

const appCss = {
  initial: css`
    border-radius: 1rem;
    ${background}
  `,
  frontend: css`
    border-radius: 1rem;
    ${background}
    ${FrontendWrapper} {
      background-color: #7500b9e1;
    }
  `,
  backend: css`
    border-radius: 1rem;
    ${background}
    ${BackendWrapper} {
      background-color: #750202e2;
    }
  `,
  fullstack: css`
    ${background}
    border-style: solid;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0.5rem #183594;

    ${FrontendWrapper} {
      background-color: #7500b9e1;
    }
    ${BackendWrapper} {
      background-color: #750202e2;
    }
  `,
} as const;

interface AppProps {
  $state?: AppStateType;
  $draggingFrontend?: boolean;
  $draggingBackend?: boolean;
  $droppable?: boolean;
}
const App = styled.div<AppProps>`
  position: relative;
  top: 50%;
  left: 50%;
  height: 45vh;
  width: 45vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(3px);
  overflow: hidden;
  transition: box-shadow 0.2s linear;
  ${turningWheelsCss}

  ${({ $state = 'initial' }) => {
    if ($state === 'fullstack') {
      return appCss.fullstack;
    }

    if ($state === 'frontend') {
      return appCss.frontend;
    }

    if ($state === 'backend') {
      return appCss.backend;
    }

    return appCss.initial;
  }};

  ${({
    $draggingFrontend = false,
    $draggingBackend = false,
    $droppable = false,
  }) => {
    let color: string | null = null;

    if ($droppable) {
      color = '#008f00c3';
    } else if ($draggingFrontend) {
      color = '#8a00e6ae';
    } else if ($draggingBackend) {
      color = '#be0202d2';
    }

    return (
      color &&
      css`
        box-shadow: 0 0 1rem 0.5rem ${color};
      `
    );
  }};
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  max-width: 1250px;
  pointer-events: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

interface DescriptionProps {
  $visible: boolean;
}
const expertiseDescCss = css<DescriptionProps>`
  width: 20rem;
  text-align: center;
  font-size: 1.4rem;
  color: #cbcbcb;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${({ $visible }) =>
    $visible
      ? css`
          visibility: visible;
          transform: translateY(0);
          transition: transform 0.2s linear;
        `
      : css`
          visibility: hidden;
          transform: translateY(0.5rem);
        `};
`;

const FrontendDescription = styled.div<DescriptionProps>`
  ${expertiseDescCss}
`;

const BackendDescription = styled.div<DescriptionProps>`
  grid-column: 3;
  ${expertiseDescCss}
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
  const appRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);

  const [adjective, setAdjective] = useState(adjectives[0]);
  const [appState, setAppState] = useState<AppStateType>('initial');
  const [dragging, setDragging] = useState<FullstackState>(
    initialFullstackState,
  );
  const [isDroppable, setIsDroppable] = useState(false);

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

  const getDragHandler = useCallback((side: keyof FullstackState) => {
    return function handler() {
      setDragging((prev) => ({ ...prev, [side]: true }));
    };
  }, []);

  const handleDragFrontend = useMemo(
    () => getDragHandler('frontend'),
    [getDragHandler],
  );

  const handleDragBackend = useMemo(
    () => getDragHandler('backend'),
    [getDragHandler],
  );

  const isWithin = useCallback(
    (rect: DOMRect, e: MouseEvent, edgeX: 'left' | 'right'): boolean => {
      if (appRef.current == null) {
        return false;
      }

      const offset = 5;
      const app = appRef.current.getBoundingClientRect();

      const left = app.left - offset;
      const right = app.right + offset;
      const top = app.top - offset;
      const bottom = app.bottom + offset;

      const withinX = rect[edgeX] > left && rect[edgeX] < right;
      const topWithinY = rect.top > top && rect.top < bottom;
      const bottomWithinY = rect.bottom > top && rect.bottom < bottom;
      const withinY = topWithinY || bottomWithinY;

      const clientX = e.clientX > app.left && e.clientX < app.right;
      const clientY = e.clientY > app.top && e.clientY < app.bottom;

      return withinX && withinY && clientX && clientY;
    },
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    const frontend = frontendRef.current;
    const backend = backendRef.current;

    function handleDragging(e: MouseEvent): void {
      setDragging((prevDragging) => {
        if (prevDragging.frontend && frontend != null) {
          const frontendRect = frontend.getBoundingClientRect();
          if (isWithin(frontendRect, e, 'right')) {
            setAppState((prevState) =>
              prevState === 'backend' ? 'fullstack' : 'frontend',
            );
          }
        }

        if (prevDragging.backend && backend != null) {
          const backendRect = backend.getBoundingClientRect();
          if (isWithin(backendRect, e, 'left')) {
            setAppState((prevState) =>
              prevState === 'frontend' ? 'fullstack' : 'backend',
            );
          }
        }

        return initialFullstackState;
      });

      setIsDroppable(false);
    }

    function handleDroppable(e: MouseEvent): void {
      setDragging((prevDragging) => {
        if (prevDragging.frontend && frontend != null) {
          const frontendRect = frontend.getBoundingClientRect();
          setIsDroppable(isWithin(frontendRect, e, 'right'));
        }

        if (prevDragging.backend && backend != null) {
          const backendRect = backend.getBoundingClientRect();
          setIsDroppable(isWithin(backendRect, e, 'left'));
        }

        return prevDragging;
      });
    }

    if (container != null) {
      container.addEventListener('mouseup', handleDragging);
      container.addEventListener('mousemove', handleDroppable);
    }
    if (frontend != null) {
      frontend.addEventListener('mousedown', handleDragFrontend);
    }
    if (backend != null) {
      backend.addEventListener('mousedown', handleDragBackend);
    }

    return () => {
      if (container != null) {
        container.removeEventListener('mouseup', handleDragging);
        container.removeEventListener('mousemove', handleDroppable);
      }
      if (frontend != null) {
        frontend.removeEventListener('mousedown', handleDragFrontend);
      }
      if (backend != null) {
        backend.removeEventListener('mousedown', handleDragBackend);
      }
    };
  }, [appState, handleDragBackend, handleDragFrontend, isWithin]);

  const isPainted = useMemo(
    () => appState === 'frontend' || appState === 'fullstack',
    [appState],
  );

  const isFunctional = useMemo(
    () => appState === 'backend' || appState === 'fullstack',
    [appState],
  );

  return (
    <ExpertiseSection>
      <Title css={{ marginBottom: 0 }}>My Expertise & Passion</Title>
      <Subtitle>
        Building <AdjectiveSpan key={adjective}>{adjective}</AdjectiveSpan> web
        applications
      </Subtitle>

      <DragContainer ref={containerRef}>
        {appState !== 'frontend' && appState !== 'fullstack' && (
          <MovingDashes $position="left" $direction="right" />
        )}

        {appState !== 'backend' && appState !== 'fullstack' && (
          <MovingDashes $position="right" $direction="left" />
        )}

        <App
          ref={appRef}
          $state={appState}
          $draggingFrontend={dragging.frontend}
          $draggingBackend={dragging.backend}
          $droppable={isDroppable}
        >
          <BrowserHeader>
            <AppHeaderCircle $color="red" />
            <AppHeaderCircle $color="yellow" />
            <AppHeaderCircle $color="green" />

            {appState === 'fullstack' && (
              <ResetButton
                onClick={() => {
                  setAppState('initial');
                }}
              >
                <MdClose />
              </ResetButton>
            )}
          </BrowserHeader>

          <FrontendWrapper className="backend-wrapper">
            {isPainted && (
              <StackContent>
                <BackendDashes $direction="left" $transform="0.6rem" />
                <BackendDashes $direction="right" $transform="-0.6rem" />
                <LuLayoutTemplate size="3.5rem" />
                <MdOutlineSettings
                  className="backend-cog-wheel-right"
                  size="3rem"
                />
                <LuPaintbrush size="3.5rem" />
              </StackContent>
            )}
          </FrontendWrapper>

          <BackendWrapper className="backend-wrapper">
            {isFunctional && (
              <StackContent>
                <BackendDashes $direction="left" $transform="0.6rem" />
                <BackendDashes $direction="right" $transform="-0.6rem" />
                <GoShieldLock size="3.5rem" />
                <MdOutlineSettings
                  className="backend-cog-wheel-left"
                  size="3rem"
                />
                <BsDatabaseLock size="3.5rem" />
              </StackContent>
            )}
          </BackendWrapper>
        </App>

        <BackendBounds>
          {!isFunctional && (
            <Draggable bounds="parent">
              <DraggableBackend ref={backendRef} $dragging={dragging.backend}>
                <span>Backend</span>
              </DraggableBackend>
            </Draggable>
          )}
        </BackendBounds>

        <FrontendBounds>
          {!isPainted && (
            <Draggable bounds="parent">
              <DraggableFrontend
                ref={frontendRef}
                $dragging={dragging.frontend}
              >
                <span>Frontend</span>
              </DraggableFrontend>
            </Draggable>
          )}
        </FrontendBounds>

        <DescriptionWrapper>
          <FrontendDescription $visible={isPainted}>
            I craft intuitive, visually stunning, and highly responsive frontend
            interfaces that improve user engagement and experience
          </FrontendDescription>

          <BackendDescription $visible={isFunctional}>
            I build robust, scalable, and efficient backend systems that ensure
            seamless data flow, security, and high performance
          </BackendDescription>
        </DescriptionWrapper>
      </DragContainer>
    </ExpertiseSection>
  );
}
