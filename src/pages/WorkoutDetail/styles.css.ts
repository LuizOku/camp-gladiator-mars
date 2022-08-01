import styled from "styled-components";
import { Heading, Label } from "@campgladiator/cgui-core.atoms.typography";
import { Tag } from "@campgladiator/cgui-core.atoms.tag";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 100px;
`;

export const Title = styled(Heading)`
  margin: 50px 0px 20px;
  text-align: center;
  color: #000000;
`;

export const Description = styled(Label)`
  text-align: center;
  margin-bottom: 30px;
  color: #000000;
`;

export const VideoWrapper = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: ${(props: { isMobile: boolean }) =>
    props.isMobile ? "column" : "row"};
  margin-top: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const StyledTag = styled(Tag)`
  margin: 2px;
`;
