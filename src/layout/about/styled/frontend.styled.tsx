import { styled } from 'styled-components';

export const FrontendContainer = styled.div`
  position: absolute;
  top: -2rem;
  right: -3rem;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 0.2rem solid #333333;
  border-radius: 1rem;
  box-shadow:
    0 0 1rem 0.2rem #0e0e0e,
    0 0 15rem 0 #7b00b4;
`;

const mainColor = '#5fdaff';
const secondaryColor = '#ec5fff';

export const FrontendTopBox = styled.div`
  margin-left: 3rem;
  height: 40%;
  width: 90%;
  border: 1px solid ${mainColor};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.1rem ${mainColor};
  background: ${mainColor};
`;

export const FrontendTitleBox = styled.div`
  height: 1.2rem;
  width: 40%;
  margin: 1rem 40% 0;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.5rem 0.1rem ${mainColor};
  background: ${mainColor};
`;

export const FrontendSubtitleBox = styled.div`
  height: 1rem;
  width: 20%;
  margin: 1rem 50% 0;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.5rem 0.1rem ${secondaryColor};
  background: ${secondaryColor};
`;

export const FrontendFlexBox = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  gap: 1.2rem;
  margin-top: 1rem;
  margin-left: 3rem;
  height: 5rem;
  mask-image: linear-gradient(#000000 40%, transparent 100%);
`;

export const FrontendFlexItemBox = styled.div`
  flex: 1;
  height: 100%;
  background: #202020;
  border-radius: 0.6rem 0.6rem 0 0;
`;
