import { styled } from 'styled-components';

export const ServerRackBackground = styled.div`
  flex: 1;
  height: 80%;
  background: #111111;
  overflow: hidden;
`;

export const ServerRackWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  border: 0.2rem solid #313131;
  border-radius: 0.5rem 0.5rem 0 0;
  background: #252525;
  overflow: hidden;
  mask-image: linear-gradient(#000000 80%, transparent 100%);
`;

export const ServerWrapper = styled.div`
  flex: 0 0 2rem;
  height: 2rem;
  padding: 0 0.5rem;
  margin: 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #333333;
  box-shadow: 0 0 0.2rem 0.1rem #30af38a7;
`;

export const PanelsWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
`;

export const ServerPanel = styled.div`
  flex: 0 0 0.4rem;
  height: 60%;
  background: #4d4d4d;
  border-radius: 2px;
`;

export const LightsWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
`;

export const ServerLight = styled.div`
  flex: 0 0 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background: #06bb00;
  box-shadow: 0 0 0.5rem 0.1rem #06bb00;
`;
