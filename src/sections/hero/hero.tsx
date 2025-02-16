import Header from '../header/header';

import {
  HeroContent,
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
          <span className="hero-intro-text">{"Hi, I'm Lex 👋"}</span>
          <span className="hero-main-text">
            I build practical tools and magical web experiences
          </span>
        </TextWrapper>
      </HeroContent>
    </HeroSection>
  );
}
