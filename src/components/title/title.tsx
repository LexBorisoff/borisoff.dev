import { styled } from 'styled-components';

interface TitleProps {
  children: string;
}

const TitleStyled = styled.h2`
  font-weight: 400;
  color: #cbcbcb;
`;

export default function Title({ children }: TitleProps): React.ReactNode {
  return <TitleStyled>{children}</TitleStyled>;
}
