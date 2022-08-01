import styled from "styled-components";
import { Avatar } from "@campgladiator/cgui-core.atoms.avatar";
import { Card } from "@campgladiator/cgui-core.atoms.card";
import { Tag } from "@campgladiator/cgui-core.atoms.tag";

export const Container = styled(Card)`
  margin: 10px;
  cursor: pointer;
  width: 270px;
  height: 170px;
  display: flex;
  align-items: center;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex-wrap: wrap;
`;

export const StyledAvatar = styled(Avatar)`
  min-width: 50px;
  min-height: 50px;
`;

export const TagsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const StyledTag = styled(Tag)`
  margin: 2px 2px 2px 0px;
`;
