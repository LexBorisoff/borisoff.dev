import { styled } from 'styled-components';

const BannerSection = styled.section`
  padding: 1rem 2rem;
  background: #d98e01;
  color: #6b3e00;
  text-align: center;
  font-weight: 600;
`;

interface BannerProps {
  children: string;
}

export default function Banner({ children }: BannerProps): React.ReactNode {
  return <BannerSection>{children}</BannerSection>;
}
