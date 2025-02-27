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
    <AboutSection id="about">
      <Title>My Expertise</Title>
      <ItemsContainer>
        <ItemWrapper>
          <ItemHeader>
            <Frontend />
          </ItemHeader>
          <ItemTitle>Frontend</ItemTitle>
          <ItemContent>
            Crafting elegant, responsive, and highly interactive user interfaces
            powered by React, TypeScript, and CSS
          </ItemContent>
        </ItemWrapper>
        <ItemWrapper>
          <ItemHeader>
            <Backend />
          </ItemHeader>
          <ItemTitle>Backend</ItemTitle>
          <ItemContent>
            Developing robust and secure backend functionalities to support the
            business needs of an application
          </ItemContent>
        </ItemWrapper>

        <ItemWrapper>
          <ItemHeader>
            <Fullstack />
          </ItemHeader>
          <ItemTitle>Full-Stack</ItemTitle>
          <ItemContent>
            Building seamless and cohesive full-stack applications that connect
            data, logic, and user experience
          </ItemContent>
        </ItemWrapper>
      </ItemsContainer>
    </AboutSection>
  );
}
