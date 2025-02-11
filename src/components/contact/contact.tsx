import { styled } from 'styled-components';

const ContactSection = styled.section`
  height: 35rem;
  border-top: 1px solid #1d1d1d;
  background: #0c0c0c;
`;

export default function Contact(): React.ReactNode {
  return <ContactSection>contact</ContactSection>;
}
