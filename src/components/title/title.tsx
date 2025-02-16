import { CSSProperties, styled } from 'styled-components';

export const Subtitle = styled.h3`
  max-width: 35rem;
  margin-bottom: 1.5rem;
  padding: 0;
  font-size: 1.4rem;
  font-weight: normal;
  font-style: italic;
  font-family: 'Courier Prime', 'Courier New', Courier, monospace;
  color: #c0c0c0;
  text-align: center;
  line-height: 1.5;
`;

interface TitleStyledProps {
  $color?: string;
}
const TitleStyled = styled.h2<TitleStyledProps>`
  font-weight: 600;
  color: #cbcbcb;
`;

interface TitleProps {
  children: string;
  css?: CSSProperties;
}

export default function Title({
  children,
  css: customCss,
}: TitleProps): React.ReactNode {
  return <TitleStyled style={customCss}>{children}</TitleStyled>;
}
