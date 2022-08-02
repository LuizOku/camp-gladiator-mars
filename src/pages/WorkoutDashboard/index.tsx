import React, {
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  FormEvent,
} from "react";

import { Heading } from "@campgladiator/cgui-core.atoms.typography";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  setList as setWorkoutList,
  selectWorkoutList,
} from "../../slices/workoutSlice";
import { Hero, WorkoutCard } from "../../components";
import { getWorkouts } from "../../api/workout";
import LEVELS from "../../shared/enums/levels.enum";
import IMPACTS from "../../shared/enums/impacts.enum";
import { WorkoutI } from "../../shared/interfaces/workout.interface";
import {
  Container,
  StyledSelect,
  StyledButton,
  StyledFieldset,
  CardsContainer,
  Title,
} from "./styles.css";

const WorkoutDashboard = () => {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const dispatch = useAppDispatch();
  const workouts = useAppSelector(selectWorkoutList);
  const [filteredWorkouts, setFilteredWorkouts] =
    useState<WorkoutI[]>(workouts);

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (workouts.length > 0) {
        return;
      }
      const res = await getWorkouts();
      dispatch(setWorkoutList(res));
      setFilteredWorkouts(res);
    };
    fetchWorkouts();
  }, [workouts]);

  const handleFilterWorkouts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const level = formRef.current?.level.value;
    const selectedLevels = level.split(",");
    const impact = formRef.current?.impact.value;
    const selectedImpacts = impact.split(",");
    let filteredResult = workouts;
    if (selectedLevels[0]) {
      filteredResult = filteredResult.filter((wor) =>
        selectedLevels.includes(wor.levelTag)
      );
    }
    if (selectedImpacts[0]) {
      filteredResult = filteredResult.filter((wor) =>
        selectedImpacts.includes(wor.impactTag)
      );
    }
    setFilteredWorkouts(filteredResult);
  };

  return (
    <>
      <Hero testId="hero-section" />
      <Container>
        <Title type="h3" variation="display" font="gotham">
          Find the exercise that fits to you
        </Title>
        <form ref={formRef} onSubmit={(e) => handleFilterWorkouts(e)}>
          <StyledFieldset inline>
            <StyledSelect
              placeholder="Level"
              name="level"
              shouldFilterRecords={false}
              searchRecords={LEVELS.map((lvl) => ({
                itemId: lvl.key,
                text: lvl.value,
                type: "item",
              }))}
            />
            <StyledSelect
              placeholder="Impact"
              name="impact"
              shouldFilterRecords={false}
              searchRecords={IMPACTS.map((imp) => ({
                itemId: imp.key,
                text: imp.value,
                type: "item",
              }))}
            />
            <StyledButton type="submit">Filter</StyledButton>
          </StyledFieldset>
        </form>
        {filteredWorkouts.length > 0 ? (
          <CardsContainer>
            {filteredWorkouts.map((fw) => (
              <WorkoutCard
                testId={`workout-card-${fw.id}`}
                key={fw.id}
                workout={fw}
              />
            ))}
          </CardsContainer>
        ) : (
          <Heading type="h3" variation="default" font="gotham">
            Can&apos;t find that workout :c
          </Heading>
        )}
      </Container>
    </>
  );
};

export default WorkoutDashboard;
