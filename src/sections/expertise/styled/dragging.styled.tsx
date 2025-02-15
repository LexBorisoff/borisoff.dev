import { styled, css, keyframes } from 'styled-components';

export const DragContainer = styled.div`
  position: relative;
  flex: 1 100%;
  width: 95%;
  display: flex;
  background: #4949491d;
  border: 0.4rem dotted #363636a6;
  border-radius: 1rem;
`;

export const FrontendBounds = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(50% + 45vh * 0.5);
  pointer-events: none;
`;

export const BackendBounds = styled.div`
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

interface MovingDashesProps {
  $direction: 'right' | 'left';
  $position: 'right' | 'left';
}

export const MovingDashes = styled.div<MovingDashesProps>`
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

const spanCss = css`
  display: inline-block;
  padding: 1rem;
  border-radius: 1rem;
`;

const draggingFrontendCss = css`
  background-color: #8a00e65a;
  background-size: 2rem 2rem;
  background-image: linear-gradient(to right, #8a00e642 1px, transparent 1px),
    linear-gradient(to bottom, #8a00e642 1px, transparent 1px);
  background-position: -1rem -1rem;

  span {
    ${spanCss}
    background-color: #8a00e6d8;
  }
`;

const draggingBackendCss = css`
  background-color: #99000060;
  background-size: 2rem 2rem;
  background-image: linear-gradient(to right, #be02022b 1px, transparent 1px),
    linear-gradient(to bottom, #be02022b 1px, transparent 1px);
  background-position: -1rem -1rem;

  span {
    ${spanCss}
    background-color: #8a0101dd;
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

export const DraggableFrontend = styled.div<DraggableProps>`
  ${draggableCss}
  left: 5%;
  border: 0.3rem dashed #8a00e6ae;

  ${({ $dragging }) => $dragging && draggingFrontendCss}

  &:hover {
    ${draggingFrontendCss}
  }
`;

export const DraggableBackend = styled.div<DraggableProps>`
  ${draggableCss}
  right: 5%;
  border: 0.3rem dashed #be0202d2;

  ${({ $dragging }) => $dragging && draggingBackendCss}

  &:hover {
    ${draggingBackendCss}
  }
`;
