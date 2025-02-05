import { type ReactNode } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #141414;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-family: 'Poppins';
  font-weight: 600;
  text-align: center;
  user-select: none;
`;

function App(): ReactNode {
  return <Container>Lex Borisoff</Container>;
}

export default App;
