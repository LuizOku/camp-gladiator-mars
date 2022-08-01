import styled from "styled-components";
import { Heading } from "@campgladiator/cgui-core.atoms.typography";
import { Button } from "@campgladiator/cgui-core.atoms.button";
import { Fieldset } from "@campgladiator/cgui-core.atoms.fieldset";
import { Select } from "@campgladiator/cgui-core.molecules.select";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 100px;
`;

export const Text = styled(Heading)`
  color: #ffffff;
  margin-top: 10px;
`;

export const StyledSelect = styled(Select)`
  margin: 10px;
  width: 200px;
`;

export const StyledButton = styled(Button)`
  width: 200px;
  margin: 10px;
`;

export const StyledFieldset = styled(Fieldset)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
