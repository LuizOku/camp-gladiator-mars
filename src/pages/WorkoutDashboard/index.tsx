import React, {
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  FormEvent,
} from "react";

import { Heading } from "@campgladiator/cgui-core.atoms.typography";

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
} from "./styles.css";

const WorkoutDashboard = () => {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const [workouts, setWorkouts] = useState<WorkoutI[]>([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState<WorkoutI[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await getWorkouts();
      setWorkouts(res);
      setFilteredWorkouts(res);
    };
    fetchWorkouts();
  }, []);

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
      <Hero />
      <Container>
        <Heading type="h3" variation="display" font="gotham">
          Find the exercise that fits to you
        </Heading>
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
              <WorkoutCard key={fw.id} workout={fw} />
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
