import React, { useEffect, useState } from "react";

import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

import { getWorkouts } from "../../api/workout";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useDeviceWidth } from "../../hooks/useDeviceWidth";
import {
  setList as setWorkoutList,
  selectWorkoutList,
} from "../../slices/workoutSlice";
import {
  Container,
  Title,
  Description,
  VideoWrapper,
  TagsContainer,
  StyledTag,
} from "./styles.css";

const WorkoutDetail = () => {
  const deviceWidth = useDeviceWidth();
  const { workoutId } = useParams();
  const dispatch = useAppDispatch();
  const workouts = useAppSelector(selectWorkoutList);
  const workout = workouts.find((wor) => wor.id === workoutId);
  const [screenSizeMultiplier, setScreenSizeMultiplier] = useState(2);

  useEffect(() => {
    if (deviceWidth < 650) {
      setScreenSizeMultiplier(1);
    } else {
      setScreenSizeMultiplier(2);
    }
  }, [deviceWidth]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (workouts.length > 0) {
        return;
      }
      const res = await getWorkouts();
      dispatch(setWorkoutList(res));
    };
    fetchWorkouts();
  }, [workouts]);

  return (
    <Container>
      <Title type="h3" variation="display" font="gotham">
        {workout?.title}
      </Title>
      <Description>{workout?.description}</Description>
      <TagsContainer isMobile={screenSizeMultiplier === 1}>
        <StyledTag
          size={screenSizeMultiplier === 2 ? "default" : "small"}
          emphasis="primary"
          variation="alternative"
        >
          Level {workout?.levelTag}
        </StyledTag>
        <StyledTag
          size={screenSizeMultiplier === 2 ? "default" : "small"}
          emphasis="default"
        >
          Impact {workout?.impactTag}
        </StyledTag>
        <StyledTag
          size={screenSizeMultiplier === 2 ? "default" : "small"}
          emphasis="default"
          variation="alternative"
        >
          {workout?.duration} mins
        </StyledTag>
      </TagsContainer>
      <VideoWrapper>
        <ReactPlayer
          data-testid="video-player"
          width={320 * screenSizeMultiplier}
          height={180 * screenSizeMultiplier}
          url={workout?.media}
          playing={true}
          controls={true}
        />
      </VideoWrapper>
    </Container>
  );
};

export default WorkoutDetail;
