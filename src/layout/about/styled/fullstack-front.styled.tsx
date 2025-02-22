import { styled } from 'styled-components';

export const FontLayerContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  background-color: #202020;
  mask-image: linear-gradient(#000000 80%, transparent 100%);
`;

export const Topbar = styled.div`
  flex: 0 0 1.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3rem;
  padding: 0 1rem;
  background: #0000005c;
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

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  color: #818181;
`;

export const MainContentTop = styled.div`
  margin-top: 0.8rem;
  width: 80%;
  height: 5rem;
  border-radius: 0.5rem;
  background: #333333;
  display: grid;
  place-content: center;
`;

export const MainContentBottom = styled.div`
  margin-top: 0.7rem;
  width: 80%;
  height: 5rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 0.7rem;
`;

export const MainContentBottomBox = styled.div`
  flex: 1;
  background: #333333;
  border-radius: 0.5rem;
  display: grid;
  place-content: center;
`;
