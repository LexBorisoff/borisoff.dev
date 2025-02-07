import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 100%;
  flex: 1;
  margin: 0 5rem;
  border-bottom: 1px solid #1d1d1d;
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
