import { FaGithub } from 'react-icons/fa';

import Header from '../header/header';

import {
  ButtonsWrapper,
  GithubButton,
  HeroContent,
  HeroIntroText,
  HeroMainText,
  HeroSection,
  SectionMask,
  TextWrapper,
} from './hero.styled';

export default function Hero(): React.ReactNode {
  return (
    <HeroSection>
      <SectionMask />
      <Header />
      <HeroContent>
        <TextWrapper>
          <HeroIntroText>
            <span>{"Hi, I'm Lex 👋"}</span>
          </HeroIntroText>
          <HeroMainText>Fullstack Software Developer</HeroMainText>
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
