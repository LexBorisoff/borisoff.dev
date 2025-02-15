import { css, styled } from 'styled-components';

export const DescriptionContainer = styled.div`
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

const descriptionCss = css<DescriptionProps>`
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

export const FrontendDescription = styled.div<DescriptionProps>`
  ${descriptionCss}
`;

export const BackendDescription = styled.div<DescriptionProps>`
  grid-column: 3;
  ${descriptionCss}
`;
