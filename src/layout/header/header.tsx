import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

import {
  LinkWrapper,
  IconWrapper,
  HeaderContainer,
  HeaderSection,
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
            {<FaLinkedinIn className="header-icon" />}
          </IconWrapper>
        </LinkWrapper>

        <LinkWrapper>
          <IconWrapper className="header-icon-wrapper">
            <MdOutlineEmail className="header-icon" />
          </IconWrapper>
          <span>lex@borisoff.dev</span>
        </LinkWrapper>
      </HeaderContainer>
    </HeaderSection>
  );
}
