import { css, keyframes, styled } from 'styled-components';

export const IconsWrapper = styled.div`
  flex: 1;
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
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
    animation: ${rotateCogWheel} 7s linear infinite;
  }
  .cog-wheel-left {
    animation: ${rotateCogWheel} 7s linear infinite reverse;
  }
`;

export const IconsRow = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  ${turningWheelsCss}
`;

export const IconWrapper = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  display: grid;
  place-content: center;
`;

export const ShadowWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 0;
  width: 0;
  display: grid;
  place-content: center;
  border-radius: 50%;
  color: #c7c7c7;
  box-shadow: 0 0 2.5rem 1.2rem #6e6e6e;
`;
