import { styled } from 'styled-components';

import Header from '../header/header';

const HeroContainer = styled.div`
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
`;

const HeroContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-bottom: 2rem;
`;

const TextWrapper = styled.div`
  text-align: center;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .hero-intro-text {
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    color: #999999;
  }

  .hero-main-text {
    font-size: 4rem;
    font-weight: 600;
    line-height: 5rem;
    background-clip: text;
    background: linear-gradient(69deg, #bbbbbb 10%, #afafaf 40%, #b43058 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function Hero(): React.ReactNode {
  return (
    <HeroContainer className="hero-container">
      <Header />

      <HeroContent className="hero-content">
        <TextWrapper>
          <span className="hero-intro-text">{"Hi, I'm Lex 👨‍💻"}</span>
          <span className="hero-main-text">
            I build modern, scalable, and efficient web applications
          </span>
        </TextWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
