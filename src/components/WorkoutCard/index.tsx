import React from "react";

import { Paragraph } from "@campgladiator/cgui-core.atoms.typography";
import { useNavigate } from "react-router-dom";

import { WorkoutI } from "../../shared/interfaces/workout.interface";
import {
  Container,
  ContentInfo,
  StyledAvatar,
  TagsContainer,
  StyledTag,
} from "./styles.css";

export type WorkoutCardI = {
  workout: WorkoutI;
  testId?: string;
};
const WorkoutCard = ({ workout, testId }: WorkoutCardI) => {
  const navigate = useNavigate();
  const navigateToWorkoutDetail = () => navigate(`workouts/${workout.id}`);
  return (
    <Container data-testid={testId} raised onClick={navigateToWorkoutDetail}>
      <StyledAvatar
        src={workout.thumbnail}
        size="50px"
        data-testid={`thumbnail-${workout.title}`}
        alt={`thumbnail-${workout.title}`}
      />
      <ContentInfo>
        <Paragraph size="default" weight="bold">
          {workout.title}
        </Paragraph>
        <TagsContainer>
          <StyledTag size="tiny" emphasis="primary" variation="alternative">
            Level {workout.levelTag}
          </StyledTag>
          <StyledTag size="tiny" emphasis="default">
            Impact {workout.impactTag}
          </StyledTag>
          <StyledTag size="tiny" emphasis="default" variation="alternative">
            {workout.duration} mins
          </StyledTag>
        </TagsContainer>
      </ContentInfo>
    </Container>
  );
};

export default WorkoutCard;
