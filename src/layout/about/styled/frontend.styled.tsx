import { styled } from 'styled-components';

export const FrontendWrapper = styled.div`
  position: absolute;
  z-index: 1;
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
    0 0 1rem 0.5rem #0e0e0e,
    0 0 15rem 0 #5fdaff49;
`;

const feBoxColor1 = '#5fdaff';
const feBoxColor2 = '#ec5fff';

export const FeBox1 = styled.div`
  margin-left: 3rem;
  height: 40%;
  width: 90%;
  border: 1px solid ${feBoxColor1};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.1rem ${feBoxColor1};
  background: ${feBoxColor1};
`;

export const FeBox2 = styled.div`
  height: 1.2rem;
  width: 40%;
  margin: 1rem 40% 0;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.5rem 0.1rem ${feBoxColor1};
  background: ${feBoxColor1};
`;

export const FeBox3 = styled.div`
  height: 1rem;
  width: 20%;
  margin: 1rem 50% 0;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.5rem 0.1rem ${feBoxColor2};
  background: ${feBoxColor2};
`;

export const FeBox4 = styled.div`
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

export const FeBox5 = styled.div`
  flex: 1;
  height: 100%;
  background: #202020;
  border-radius: 0.6rem 0.6rem 0 0;
`;
