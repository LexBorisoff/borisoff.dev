import { CSSProperties, styled } from 'styled-components';

import { media } from '../../theme/media';

export const Subtitle = styled.h3`
  margin: 0;
  padding: 0 3rem;
  font-size: 1.6rem;
  font-weight: normal;
  font-style: italic;
  font-family: 'Courier Prime', 'Courier New', Courier, monospace;
  color: #c0c0c0;
  text-align: center;
  line-height: 1.5;

  ${media.lg} {
    font-size: 1.5rem;
  }

  ${media.md} {
    font-size: 1.4rem;
  }

  ${media.sm} {
    font-size: 1.3rem;
  }

  ${media.xs} {
    font-size: 1.2rem;
    line-height: 1.3;
  }
`;

interface TitleStyledProps {
  $color?: string;
}
const TitleStyled = styled.h2<TitleStyledProps>`
  font-weight: 600;
  text-align: center;
  color: #ebebeb;
`;

interface TitleProps {
  children: React.ReactNode;
  css?: CSSProperties;
}

export default function Title({
  children,
  css: customCss,
}: TitleProps): React.ReactNode {
  return <TitleStyled style={customCss}>{children}</TitleStyled>;
}
