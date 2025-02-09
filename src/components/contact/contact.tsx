import { styled } from 'styled-components';

const ContactContainer = styled.div`
  height: 35rem;
  border-top: 1px solid #1d1d1d;
  background: #0c0c0c;
`;

export default function Contact(): React.ReactNode {
  return <ContactContainer>contact</ContactContainer>;
}
