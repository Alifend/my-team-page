import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Data from "../data/dummydata";

const TeamPage = () => {
  return (
    <Container>
      <TextContainer>
        <Title>The creative crew</Title>
        <Subparagraph>
          <Subtitle>Who We are</Subtitle>
          <Text>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </Text>
        </Subparagraph>
      </TextContainer>
      <TeamContainer>
        {Data.map((card, index) => {
          let position = index % 2 === 0 ? "flex-start" : "flex-end";
          console.log(position);
          return <Card key={index} position={position} {...card} />;
        })}
      </TeamContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const TextContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 20px;
  @media (min-width: 700px) {
    display: flex;
    width: 60%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.p`
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.045em;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const Subparagraph = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 70%;
  }
`;
const Subtitle = styled.p`
  margin-bottom: 6px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;

  text-transform: uppercase;

  color: #000000;
`;
const Text = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;

  color: #000000;
`;
const TeamContainer = styled.div`
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%; // 75
  max-width: 1050px;
  height: auto;
  margin-top: 40px;
`;

export default TeamPage;
