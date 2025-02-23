import FullstackFront from './fullstack-front';
import {
  BackLayer,
  FrontLayer,
  FullstackContainer,
  MiddleLayer,
} from './styled/fullstack.styled';

export default function Fullstack(): React.ReactNode {
  return (
    <FullstackContainer>
      <BackLayer />
      <MiddleLayer />

      <FrontLayer>
        <FullstackFront />
      </FrontLayer>
    </FullstackContainer>
  );
}
