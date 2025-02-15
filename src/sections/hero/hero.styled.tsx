import { styled } from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  height: 105vh;
  max-height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: top;
  background-color: #0f0f0f;
  background-size: 3rem 3rem;
  background-image: linear-gradient(to right, #81818127 1px, transparent 1px),
    linear-gradient(to bottom, #81818127 1px, transparent 1px);
  background-position: -2px -2px;
  mask-image: linear-gradient(#000000 85%, transparent 100%);
`;

export const SectionMask = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex: 1;
  background: radial-gradient(40rem 40rem at 10% 0%, #00115e76, transparent),
    radial-gradient(40rem 40rem at 0% 100%, #5e000058, transparent),
    radial-gradient(40rem 40rem at 100% 0%, #6e003c70, transparent),
    radial-gradient(40rem 40rem at 90% 100%, #6e54005a, transparent);
`;

export const HeroContent = styled.div`
  z-index: 1;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const TextWrapper = styled.div`
  text-align: center;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .hero-intro-text {
    font-size: 2rem;
    font-family: 'Courier Prime', 'Courier New', Courier, monospace;
    font-weight: 500;
    font-style: italic;
    color: #b8b8b8;
  }

  .hero-main-text {
    font-size: 4rem;
    font-weight: 500;
    line-height: 5rem;
    background: linear-gradient(180deg, #bbbbbb 10%, #afafaf 40%, #797979 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
