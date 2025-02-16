import { styled, keyframes } from 'styled-components';

import { ADJECTIVE_ANIMATION } from '../constants';

const enter = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const exit = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20%);
    opacity: 0;
    visibility: hidden;
    display: none;
  }
`;

export const AdjectiveSpan = styled.span`
  font: inherit;
  display: inline-block;
  color: #357dc0;
  font-weight: 600;

  animation:
    ${enter} ${ADJECTIVE_ANIMATION.Time}s forwards,
    ${exit} ${ADJECTIVE_ANIMATION.Time}s ${ADJECTIVE_ANIMATION.Delay}s
      ease-in-out forwards;
`;
