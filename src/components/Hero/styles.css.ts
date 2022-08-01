import styled from "styled-components";
import { Heading } from "@campgladiator/cgui-core.atoms.typography";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url("mars.jpeg");
  background-size: cover;
  padding: 100px 100px 0px 100px;
`;

export const Text = styled(Heading)`
  color: #ffffff;
  margin-top: 10px;
`;
