import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  background-color: #0f0f0f96;
`;

const Wrapper = styled.div`
  height: 100%;
  max-width: 1200px;
  flex: 1;
  margin: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header(): React.ReactNode {
  return (
    <HeaderContainer className="header-container">
      <Wrapper>lex@borisoff.dev</Wrapper>
    </HeaderContainer>
  );
}
