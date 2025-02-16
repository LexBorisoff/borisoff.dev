import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

import {
  EmailWrapper,
  IconWrapper,
  LinkStyled,
  LinksWrapper,
  HeaderContainer,
  HeaderSection,
} from './header.styled';

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
    <HeaderSection>
      <HeaderContainer>
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
      </HeaderContainer>
    </HeaderSection>
  );
}
