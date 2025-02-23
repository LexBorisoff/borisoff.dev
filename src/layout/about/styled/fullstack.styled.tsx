import { styled } from 'styled-components';

export const FullstackContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const FrontLayer = styled.div`
  flex: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -40%);
  height: 70%;
  width: 70%;
  overflow: hidden;
  background-color: #141414;
  border: 0.2rem solid #292929;
  border-radius: 0.6rem;
  box-shadow: 0 0 15rem 0 #00218b;
`;

export const MiddleLayer = styled.div`
  flex: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  width: 70%;
  background-color: #06bb00;
  background-size: 3rem 3rem;
  background-image: linear-gradient(to right, #46e754 1px, transparent 1px),
    linear-gradient(to bottom, #46e754 1px, transparent 1px);
  background-position: -0.4rem -0.4rem;
  border: 0.2rem solid #46e754;
  border-radius: 0.6rem;
`;

export const BackLayer = styled.div`
  flex: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -60%);
  height: 70%;
  width: 70%;
  background-color: #941818;
  background-size: 3rem 3rem;
  background-image: linear-gradient(to right, #cc1010 1px, transparent 1px),
    linear-gradient(to bottom, #cc1010 1px, transparent 1px);
  background-position: -0.4rem -0.4rem;
  border: 0.2rem solid #cc1010;
  border-radius: 0.6rem;
  /* box-shadow: 0 0 15rem 0 #cc1010; */
`;
