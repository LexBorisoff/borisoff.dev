import { styled } from 'styled-components';

const StackContainer = styled.div`
  width: 100%;
  height: 17rem;
  background: #131313;
  border-top: 1px solid #1d1d1d;
  border-bottom: 1px solid #1d1d1d;
`;

export default function Stack(): React.ReactNode {
  return <StackContainer className="stack-container">stack</StackContainer>;
}
