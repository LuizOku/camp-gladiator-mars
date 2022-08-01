import React from "react";

import { Container, Text } from "./styles.css";

const Hero = () => {
  return (
    <Container>
      <Text type="h3" variation="display" font="united">
        Camp Gladiator is going to Mars...
      </Text>
      <Text type="h3" variation="default" font="united">
        Start now your virtual workouts!
      </Text>
    </Container>
  );
};

export default Hero;
