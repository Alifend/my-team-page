import React from "react";
import styled from "styled-components";

const Card = ({ position, img, rank, name }) => {
  return (
    <Container position={position}>
      <Img src={img} />
      <Name>{name}</Name>
      <Rank style={position === "flex-end" ? { top: "20%" } : { top: "0" }}>
        {rank}
      </Rank>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.position};
  position: relative;
  width: 160px;
  height: 270px;
  margin: 5px;

  @media (min-width: 680px) {
    width: 264px;
    height: 450px;
    margin: 30px;
  }
`;

const Img = styled.img`
  width: 89%;
  height: 75%;
  padding-bottom: 10px;
`;

const Rank = styled.p`
  position: absolute;
  writing-mode: vertical-rl;
  right: 0;
  font-family: PT Serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  text-transform: uppercase;

  color: #000000;
`;

const Name = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;
export default Card;
