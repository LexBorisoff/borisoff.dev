import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import {
  LinkWrapper,
  IconWrapper,
  HeaderContainer,
  HeaderSection,
  EmailWrapper,
} from './header.styled';

export default function Header(): React.ReactNode {
  return (
    <HeaderSection>
      <HeaderContainer>
        <LinkWrapper
          href="https://linkedin.com/in/lexborisoff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper className="header-icon-wrapper">
            {<FaLinkedin className="header-icon" />}
          </IconWrapper>
        </LinkWrapper>

        <EmailWrapper>
          <IconWrapper className="header-icon-wrapper">
            <MdEmail className="header-icon" />
          </IconWrapper>
          <span>lex@borisoff.dev</span>
        </EmailWrapper>
      </HeaderContainer>
    </HeaderSection>
  );
}
