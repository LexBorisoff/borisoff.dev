import { styled } from 'styled-components';

import Title from '../../components/title/title';

const AboutSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1280px;
  padding: 0 2rem 2rem;
`;

const ItemWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  min-width: 20rem;
  min-height: 20rem;
  max-height: 100%;
  height: 100%;
  border: 1px solid #272727;
  border-radius: 0.7rem;
  background: #111111cc;
  overflow: hidden;
`;

const ItemHeader = styled.div`
  position: relative;
  flex: 0 0 17rem;
  width: 100%;
`;

const ItemTitle = styled.h4`
  margin: 0;
  padding: 0;
  background: transparent;
`;

interface ItemContentProps {
  $textAlign?: string;
}
const ItemContent = styled.div<ItemContentProps>`
  text-align: ${({ $textAlign = 'center' }) => $textAlign};
  padding: 0.5rem 2rem 2rem;
  color: #bebebe;
  font-size: 1rem;
`;

const LeftWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: -2rem;
  right: -3rem;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 0.2rem solid #333333;
  border-radius: 1rem;
  box-shadow:
    0 0 1rem 0.5rem #0e0e0e,
    0 0 15rem 0 #5fdaff49;
`;

const feBoxColor1 = '#5fdaff';
const feBoxColor2 = '#ec5fff';
const FeBox1 = styled.div`
  margin-left: 3rem;
  height: 40%;
  width: 90%;
  border: 1px solid ${feBoxColor1};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.1rem ${feBoxColor1};
  background: ${feBoxColor1};
`;

const FeBox2 = styled.div`
  height: 1.2rem;
  width: 40%;
  margin: 1rem 40% 0;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.5rem 0.1rem ${feBoxColor1};
  background: ${feBoxColor1};
`;

const FeBox3 = styled.div`
  height: 1rem;
  width: 20%;
  margin: 1rem 50% 0;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.5rem 0.1rem ${feBoxColor2};
  background: ${feBoxColor2};
`;

const FeBox4 = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  gap: 1.2rem;
  margin-top: 1rem;
  margin-left: 3rem;
  height: 5rem;
  mask-image: linear-gradient(#000000 40%, transparent 100%);
`;

const FeBox5 = styled.div`
  flex: 1;
  height: 100%;
  background: #202020;
  border-radius: 0.6rem 0.6rem 0 0;
`;

const EndWrapper = styled.div`
  position: absolute;
  top: -2rem;
  left: -3rem;
  height: 100%;
  width: 100%;
  border: 3px solid #8d0101;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0.1rem #8d0101;
  border: 0.2rem solid #333333;
  border-radius: 1rem;
  box-shadow:
    0 0 1rem 0.5rem #0e0e0e,
    0 0 15rem 0.5rem #5fff6c47;
`;

export default function About(): React.ReactNode {
  return (
    <AboutSection>
      <Title>About Me</Title>
      <ItemsContainer>
        <ItemWrapper>
          <ItemHeader>
            <LeftWrapper>
              <FeBox1 />
              <FeBox2 />
              <FeBox3 />
              <FeBox4>
                <FeBox5 />
                <FeBox5 />
                <FeBox5 />
              </FeBox4>
            </LeftWrapper>
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
            <EndWrapper></EndWrapper>
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
          <ItemHeader></ItemHeader>
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
