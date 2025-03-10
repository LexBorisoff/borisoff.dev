import { useEffect, useMemo, useRef, useState } from 'react';

import Title from '../../components/title/title';

import { stackLogos } from './stack-logos';
import { Logo, Slider, SliderWrapper, StackSection } from './stack.styled';

export default function Stack(): React.ReactNode {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [pauseAnimation, setPauseAnimation] = useState(false);

  // plays animation only when stack section is in view
  useEffect(() => {
    const ref = sliderRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setStartAnimation((prev) => prev || entry.isIntersecting);
      setPauseAnimation(!entry.isIntersecting);
    });

    if (ref != null) {
      observer.observe(ref);
    }

    return () => {
      if (ref != null) {
        observer.unobserve(ref);
      }
    };
  }, []);

  const logos = useMemo(
    () =>
      stackLogos.map(({ src, alt, name }) => (
        <Logo key={name} className="stack-logo" title={name}>
          <img src={src} alt={alt} height="100%" />
        </Logo>
      )),
    [],
  );

  const slider = useMemo(
    () => (
      <Slider $startAnimation={startAnimation} $pauseAnimation={pauseAnimation}>
        {logos}
      </Slider>
    ),
    [logos, startAnimation, pauseAnimation],
  );

  return (
    <StackSection>
      <Title>My Stack</Title>
      <SliderWrapper ref={sliderRef}>
        {slider}
        {slider}
      </SliderWrapper>
    </StackSection>
  );
}
