import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.span`
  height: 10px;
`;

const SubTitle = styled.h2`
  color: #91a7ff;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightblue;
`;

const Button = styled.button`
  background-color: #91a7ff;
  font-weight: 500;
  width: max-content;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Design. Develop. Deploy</Title>
          <WhatWeDo>
            <Line> &macr;</Line>
            <SubTitle>What I do</SubTitle>
          </WhatWeDo>
          <Desc>I enjoy developing elegant, modern digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/*3d model */}
          <Img src="./img/alien.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
