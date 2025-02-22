import { styled } from 'styled-components';

export const BackendContainer = styled.div`
  position: absolute;
  top: -2rem;
  left: -3rem;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1.2rem;
  padding-right: 1rem;

  border: 0.2rem solid #333333;
  border-radius: 1rem;
  box-shadow:
    0 0 1rem 0.2rem #0e0e0e,
    0 0 15rem 0.5rem #00920c9e;
  background-size: 3.5rem 3.5rem;
  background-image: linear-gradient(to right, #81818127 1px, transparent 1px),
    linear-gradient(to bottom, #81818127 1px, transparent 1px);
`;
