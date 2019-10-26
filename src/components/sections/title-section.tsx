import React from "react";
import styled from "styled-components";
import { Section } from "../common";
import { useMeetupGroupInfo } from "../../hooks";

const Title = styled.h1`
  color: white;
  font-size: 8rem;
  span {
    color: yellow;
    display: block;
    text-align: center;
  }
`;

const TitleSection: React.FC = () => {
  const data = useMeetupGroupInfo();
  console.log(data);
  return (
    <Section bg="#000">
      <Title>
        Long Island <span>JavaScript</span>
      </Title>
    </Section>
  );
};

export default TitleSection;