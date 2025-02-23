import {
  FrontendTopBox,
  FrontendTitleBox,
  FrontendSubtitleBox,
  FrontendFlexBox,
  FrontendFlexItemBox,
  FrontendContainer,
} from './styled/frontend.styled';

export default function Frontend(): React.ReactNode {
  return (
    <FrontendContainer>
      <FrontendTopBox />
      <FrontendTitleBox />
      <FrontendSubtitleBox />
      <FrontendFlexBox>
        <FrontendFlexItemBox />
        <FrontendFlexItemBox />
        <FrontendFlexItemBox />
      </FrontendFlexBox>
    </FrontendContainer>
  );
}
