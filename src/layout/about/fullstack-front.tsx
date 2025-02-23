import { LuLetterText } from 'react-icons/lu';
import { MdOutlinePhotoLibrary, MdOutlineSmartDisplay } from 'react-icons/md';

import {
  ContentContainer,
  FontLayerContainer,
  MainContentBottom,
  MainContentBottomBox,
  MainContentTop,
  Topbar,
  TopbarCircle,
} from './styled/fullstack-front.styled';

export default function FullstackFront(): React.ReactNode {
  return (
    <FontLayerContainer>
      <Topbar>
        <TopbarCircle $color="red" />
        <TopbarCircle $color="yellow" />
        <TopbarCircle $color="green" />
      </Topbar>

      <ContentContainer>
        <MainContentTop>
          <LuLetterText size="2rem" />
        </MainContentTop>

        <MainContentBottom>
          <MainContentBottomBox>
            <MdOutlinePhotoLibrary size="2rem" />
          </MainContentBottomBox>

          <MainContentBottomBox>
            <MdOutlineSmartDisplay size="2rem" />
          </MainContentBottomBox>
        </MainContentBottom>
      </ContentContainer>
    </FontLayerContainer>
  );
}
