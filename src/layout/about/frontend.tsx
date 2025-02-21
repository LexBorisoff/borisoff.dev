import {
  FeBox1,
  FeBox2,
  FeBox3,
  FeBox4,
  FeBox5,
  FrontendWrapper,
} from './styled/frontend.styled';

export default function Frontend(): React.ReactNode {
  return (
    <FrontendWrapper>
      <FeBox1 />
      <FeBox2 />
      <FeBox3 />
      <FeBox4>
        <FeBox5 />
        <FeBox5 />
        <FeBox5 />
      </FeBox4>
    </FrontendWrapper>
  );
}
