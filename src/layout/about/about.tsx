import Title from '../../components/title/title';

import Backend from './backend';
import Frontend from './frontend';
import Fullstack from './fullstack';
import {
  ItemContent,
  ItemHeader,
  ItemsContainer,
  ItemTitle,
  ItemWrapper,
} from './styled/items.styled';
import { AboutSection } from './styled/sections.styled';

export default function About(): React.ReactNode {
  return (
    <AboutSection>
      <Title>About Me</Title>
      <ItemsContainer>
        <ItemWrapper>
          <ItemHeader>
            <Frontend />
          </ItemHeader>
          <ItemTitle>Frontend</ItemTitle>
          <ItemContent>
            My main passion lies in developing elegant, responsive, and highly
            interactive frontend interfaces powered by React, TypeScript, and
            CSS. I love it for the opportunities to experiment, explore, and
            express my creativity while pushing the boundaries of what a web
            application can offer its users.
          </ItemContent>
        </ItemWrapper>

        <ItemWrapper>
          <ItemHeader>
            <Backend />
          </ItemHeader>
          <ItemTitle>Backend</ItemTitle>
          <ItemContent>
            I also love and enjoy building robust backend functionalities to
            support the business needs of an application. I find its
            straightforward approach highly satisfying as it allows me to
            utilize my programming expertise to come up with creative solutions
            in seemingly rigid and confined environments.
          </ItemContent>
        </ItemWrapper>

        <ItemWrapper>
          <ItemHeader>
            <Fullstack />
          </ItemHeader>
          <ItemTitle>Full-Stack</ItemTitle>
          <ItemContent>
            I believe that developing both sides of a web app is truly rewarding
            and liberating. The challenge to think of the {"end-user's"}{' '}
            perspective when crafting the UI, while understanding and building
            the business logic on the backend allows me to write more seamless
            and cohesive software.
          </ItemContent>
        </ItemWrapper>
      </ItemsContainer>
    </AboutSection>
  );
}
