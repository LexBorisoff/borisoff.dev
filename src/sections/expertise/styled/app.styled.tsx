import { styled, css, keyframes } from 'styled-components';

import { AppStateType } from '../types';

export const Topbar = styled.div`
  flex: 0 0 2rem;
  border-bottom: 0.2rem solid #00000022;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3rem;
  padding: 0 1rem;
  background: #0000005c;
`;

export const CloseButton = styled.button`
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

interface TopbarCircleProps {
  $color: string;
}

export const TopbarCircle = styled.div<TopbarCircleProps>`
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

const stackCss = css`
  width: 100%;
  flex: 0.5;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

export const DroppableText = styled.div`
  flex: 1 100%;
  display: grid;
  place-content: center;
  font-size: 1.2rem;
`;

export const FrontendWrapper = styled.div`
  ${stackCss}
`;

export const BackendWrapper = styled.div`
  ${stackCss}
`;

const moveDashesRight = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1.2rem 0;
  }
`;

const moveDashesLeft = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: -1.2rem 0;
  }
`;

interface StackDashesProps {
  $direction?: 'right' | 'left';
  $transform?: string;
}

export const StackDashes = styled.div<StackDashesProps>`
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
    2s linear infinite;
`;

export const StackContent = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const rotateCogWheel = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const turningWheelsCss = css`
  .cog-wheel-right {
    animation: ${rotateCogWheel} 3s linear infinite;
  }
  .cog-wheel-left {
    animation: ${rotateCogWheel} 3s linear infinite reverse;
  }
`;

const backgroundCss = css`
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
    ${backgroundCss}
  `,
  frontend: css`
    border-radius: 1rem;
    ${backgroundCss}
    ${FrontendWrapper} {
      background-color: #7500b9e1;
    }
  `,
  backend: css`
    border-radius: 1rem;
    ${backgroundCss}
    ${BackendWrapper} {
      background-color: #750202e2;
    }
  `,
  fullstack: css`
    ${backgroundCss}
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

interface DroppableAppProps {
  $state?: AppStateType;
  $draggingFrontend?: boolean;
  $draggingBackend?: boolean;
  $droppable?: boolean;
}

export const DroppableApp = styled.div<DroppableAppProps>`
  position: relative;
  top: 50%;
  left: 50%;
  height: 45vh;
  width: 45vh;
  display: flex;
  flex-flow: column nowrap;
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
