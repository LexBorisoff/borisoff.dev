import { CSSProperties, styled } from 'styled-components';

interface TitleProps {
  children: string;
  css?: CSSProperties;
}

const TitleStyled = styled.h2`
  font-weight: 600;
  color: #cbcbcb;
`;

export default function Title({ children, css }: TitleProps): React.ReactNode {
  return <TitleStyled style={css}>{children}</TitleStyled>;
}
