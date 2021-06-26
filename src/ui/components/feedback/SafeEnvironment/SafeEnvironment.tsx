import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@material-ui/core"; //limita o componente na página.

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
