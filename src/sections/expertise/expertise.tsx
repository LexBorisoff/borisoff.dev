import { useMemo } from 'react';
import Draggable from 'react-draggable';
import { BsDatabaseLock } from 'react-icons/bs';
import { GoShieldLock } from 'react-icons/go';
import { LuLayoutTemplate, LuPaintbrush } from 'react-icons/lu';
import { MdClose, MdOutlineSettings } from 'react-icons/md';

import Title, { Subtitle } from '../../components/title/title';

import { useDrag } from './hooks/use-drag';
import { useNextAdjective } from './hooks/use-next-adjective';
import { AdjectiveSpan } from './styled/adjective.styled';
import {
  TopbarCircle,
  Topbar,
  CloseButton,
  FrontendWrapper,
  StackContent,
  BackendWrapper,
  DroppableApp,
  StackDashes,
  DroppableText,
} from './styled/app.styled';
import {
  BackendDescription,
  DescriptionContainer,
  FrontendDescription,
} from './styled/description.styled';
import {
  BackendBounds,
  DragContainer,
  DraggableBackend,
  DraggableFrontend,
  FrontendBounds,
  MovingDashes,
} from './styled/dragging.styled';
import { ExpertiseSection } from './styled/section.styled';

export default function Expertise(): React.ReactNode {
  const adjective = useNextAdjective();
  const { appState, isDragging, isDroppable, refs, reset } = useDrag();

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

      <DragContainer ref={refs.container}>
        {appState !== 'frontend' && appState !== 'fullstack' && (
          <MovingDashes $position="left" $direction="right" />
        )}

        {appState !== 'backend' && appState !== 'fullstack' && (
          <MovingDashes $position="right" $direction="left" />
        )}

        <DroppableApp
          ref={refs.app}
          $state={appState}
          $draggingFrontend={isDragging.frontend}
          $draggingBackend={isDragging.backend}
          $droppable={isDroppable}
        >
          <Topbar>
            <TopbarCircle $color="red" />
            <TopbarCircle $color="yellow" />
            <TopbarCircle $color="green" />

            {(isPainted || isFunctional) && (
              <CloseButton onClick={reset}>
                <MdClose />
              </CloseButton>
            )}
          </Topbar>

          {appState === 'initial' && (
            <DroppableText>Drop each item here</DroppableText>
          )}

          <FrontendWrapper>
            {isPainted && (
              <StackContent>
                <StackDashes $direction="left" $transform="0.6rem" />
                <StackDashes $direction="right" $transform="-0.6rem" />
                <LuLayoutTemplate size="3.5rem" />
                <MdOutlineSettings className="cog-wheel-right" size="3rem" />
                <LuPaintbrush size="3.5rem" />
              </StackContent>
            )}
          </FrontendWrapper>

          <BackendWrapper>
            {isFunctional && (
              <StackContent>
                <StackDashes $direction="left" $transform="0.6rem" />
                <StackDashes $direction="right" $transform="-0.6rem" />
                <GoShieldLock size="3.5rem" />
                <MdOutlineSettings className="cog-wheel-left" size="3rem" />
                <BsDatabaseLock size="3.5rem" />
              </StackContent>
            )}
          </BackendWrapper>
        </DroppableApp>

        <BackendBounds>
          {!isFunctional && (
            <Draggable bounds="parent">
              <DraggableBackend
                ref={refs.backend}
                $dragging={isDragging.backend}
              >
                <span>Backend</span>
              </DraggableBackend>
            </Draggable>
          )}
        </BackendBounds>

        <FrontendBounds>
          {!isPainted && (
            <Draggable bounds="parent">
              <DraggableFrontend
                ref={refs.frontend}
                $dragging={isDragging.frontend}
              >
                <span>Frontend</span>
              </DraggableFrontend>
            </Draggable>
          )}
        </FrontendBounds>

        <DescriptionContainer>
          <FrontendDescription $visible={isPainted}>
            I craft intuitive, visually stunning, and highly responsive frontend
            interfaces that improve user engagement and experience
          </FrontendDescription>

          <BackendDescription $visible={isFunctional}>
            I build robust, scalable, and efficient backend systems that ensure
            seamless data flow, security, and high performance
          </BackendDescription>
        </DescriptionContainer>
      </DragContainer>
    </ExpertiseSection>
  );
}
