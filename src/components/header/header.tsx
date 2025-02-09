import { styled } from 'styled-components';

const HeaderContainer = styled.header`
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

  span {
    font-family: 'Courier Prime', 'Courier New', Courier, monospace;
  }
`;

export default function Header(): React.ReactNode {
  return (
    <HeaderContainer className="header-container">
      <Wrapper>
        <span>lex@borisoff.dev</span>
      </Wrapper>
    </HeaderContainer>
  );
}
