import { FaGithub } from 'react-icons/fa';
import { PiStackBold } from 'react-icons/pi';

import { Subtitle } from '../../components/title/title';
import { useNextAdjective } from '../../hooks/use-next-adjective';
import Header from '../header/header';

import { AdjectiveSpan } from './styled/adjective.styled';
import {
  ButtonsWrapper,
  GithubButton,
  HeroContent,
  HeroTitleText,
  HeroNameText,
  TextWrapper,
} from './styled/content.styled';
import { HeroSection, SectionMask } from './styled/section.styled';

export default function Hero(): React.ReactNode {
  const adjective = useNextAdjective();

  return (
    <HeroSection id="hero">
      <SectionMask />
      <Header />
      <HeroContent>
        <TextWrapper>
          <HeroTitleText>
            <span>
              Software <PiStackBold className="full-stack-hero-icon" /> Engineer
            </span>
          </HeroTitleText>

          <HeroNameText>{'Lex Borisoff'}</HeroNameText>

          <Subtitle>
            I build <AdjectiveSpan key={adjective}>{adjective}</AdjectiveSpan>{' '}
            web applications
          </Subtitle>
        </TextWrapper>

        <ButtonsWrapper>
          <GithubButton
            href="https://github.com/lexborisoff"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FaGithub className="hero-link-icon" />
              GitHub
            </button>
          </GithubButton>
        </ButtonsWrapper>
      </HeroContent>
    </HeroSection>
  );
}
