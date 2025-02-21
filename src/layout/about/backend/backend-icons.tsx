import { LuShieldCheck } from 'react-icons/lu';
import { MdOutlineSettings } from 'react-icons/md';
import { TbDatabase } from 'react-icons/tb';

import {
  IconsRow,
  IconsWrapper,
  IconWrapper,
  ShadowWrapper,
} from '../styled/backend/backend-icons.styled';

export default function BackendIcons(): React.ReactNode {
  return (
    <IconsWrapper>
      <IconsRow>
        <IconWrapper>
          <ShadowWrapper>
            <LuShieldCheck size="3.5rem" />
          </ShadowWrapper>
        </IconWrapper>

        <IconWrapper>
          <ShadowWrapper>
            <MdOutlineSettings size="3.5rem" className="cog-wheel-left" />
          </ShadowWrapper>
        </IconWrapper>
      </IconsRow>

      <IconsRow>
        <IconWrapper>
          <ShadowWrapper>
            <MdOutlineSettings size="3.5rem" className="cog-wheel-right" />
          </ShadowWrapper>
        </IconWrapper>

        <IconWrapper>
          <ShadowWrapper>
            <TbDatabase size="3.5rem" />
          </ShadowWrapper>
        </IconWrapper>
      </IconsRow>
    </IconsWrapper>
  );
}
