import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

import {
  LinkWrapper,
  IconWrapper,
  HeaderContainer,
  HeaderSection,
} from './header.styled';

interface LinkProps {
  Icon: IconType;
  href: string;
  text?: string;
}
function Link({ Icon, href, text }: LinkProps): React.ReactNode {
  return (
    <LinkWrapper href={href} target="_blank" rel="noopener noreferrer">
      <IconWrapper className="header-icon-wrapper">
        {<Icon className="header-icon" />}
      </IconWrapper>
      {text != null && <span>{text}</span>}
    </LinkWrapper>
  );
}

export default function Header(): React.ReactNode {
  return (
    <HeaderSection>
      <HeaderContainer>
        <LinkWrapper>
          <IconWrapper className="header-icon-wrapper">
            <MdOutlineEmail className="header-icon" />
          </IconWrapper>
          <span>lex@borisoff.dev</span>
        </LinkWrapper>

        <Link
          href="https://linkedin.com/in/lexborisoff/"
          Icon={FaLinkedinIn}
          text="LinkedIn"
        />

        <Link
          href="https://github.com/lexborisoff"
          Icon={FaGithub}
          text="GitHub"
        />
      </HeaderContainer>
    </HeaderSection>
  );
}
