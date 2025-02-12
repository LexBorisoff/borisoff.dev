import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { css, styled } from 'styled-components';

const HeaderSection = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
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

const EmailWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1.3rem;
    font-family: 'Courier Prime', 'Courier New', Courier, monospace;
    color: #d9d9d9;
  }
`;

const LinksWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
`;

const iconCss = css`
  background: #2727277a;
  border: 1px solid #3a3a3a;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  display: grid;
  place-content: center;
  transition: background 0.2s;

  &:hover {
    background: #0c2576ab;
    border: 1px solid #475994ab;
  }
`;

interface IconWrapperProps {
  clickable?: boolean;
}
const IconWrapper = styled.div<IconWrapperProps>`
  ${iconCss}

  ${({ clickable }) =>
    clickable &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

const LinkStyled = styled.a`
  color: inherit;
  text-decoration: none;
  ${iconCss}
`;

interface LinkProps {
  children: React.ReactElement;
  href: string;
}
function Link({ children, href }: LinkProps): React.ReactNode {
  return (
    <LinkStyled href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </LinkStyled>
  );
}

export default function Header(): React.ReactNode {
  return (
    <HeaderSection className="header-container">
      <Wrapper>
        <EmailWrapper>
          <IconWrapper>
            <MdOutlineEmail size="1.2rem" />
          </IconWrapper>
          <span>lex@borisoff.dev</span>
        </EmailWrapper>

        <LinksWrapper>
          <Link href="https://github.com/lexborisoff">
            <FaGithub size="1.2rem" />
          </Link>

          <Link href="https://linkedin.com/in/lexborisoff">
            <FaLinkedinIn size="1.2rem" />
          </Link>
        </LinksWrapper>
      </Wrapper>
    </HeaderSection>
  );
}
