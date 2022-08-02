import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { WorkoutCard } from "../../components";

import "../../setupTests";
import {
  ImpactTagT,
  LevelTagT,
} from "../../shared/interfaces/workout.interface";

const baseProps = {
  workout: {
    description:
      "Enjoy a fun and high energy workout with Amber. We will engage a full body workout and get your heart rate up!",
    thumbnail:
      "https://cgcdn.s3.amazonaws.com/nation/users/UID-W1405610919UID-53c7eba7a992b.png",
    levelTag: "beginner" as LevelTagT,
    media: "https://virtual-library.s3.amazonaws.com/Week2-AmberAutrey.mp4",
    title: "Strength and Agility by Amber Autrey",
    impactTag: "high" as ImpactTagT,
    id: "3",
    trainerId: "3",
    duration: 60,
  },
};

const renderComponent = (customProps?: { testId?: string }) => {
  const props = { ...baseProps, ...customProps };

  return render(
    <Router>
      <WorkoutCard {...props} />
    </Router>
  );
};

describe("<WorkoutCard />", () => {
  it("renders without crashing", () => {
    const view = renderComponent();
    expect(view).toMatchSnapshot();
  });

  it("should have the avatar with the thumbnail", () => {
    renderComponent();
    expect(
      screen.getByTestId(`thumbnail-${baseProps.workout.title}`)
    ).toBeInTheDocument();
  });

  it("should have the workout title", () => {
    renderComponent();
    expect(screen.getByText(baseProps.workout.title)).toBeInTheDocument();
  });

  it("should have the workout level tag", () => {
    renderComponent();
    expect(
      screen.getByText(`Level ${baseProps.workout.levelTag}`)
    ).toBeInTheDocument();
  });

  it("should have the workout impact tag", () => {
    renderComponent();
    expect(
      screen.getByText(`Impact ${baseProps.workout.impactTag}`)
    ).toBeInTheDocument();
  });

  it("should have the workout duration tag", () => {
    renderComponent();
    expect(
      screen.getByText(`${baseProps.workout.duration} mins`)
    ).toBeInTheDocument();
  });

  it("should have a data-test-id", () => {
    const testId = "test-workout-card";
    renderComponent({ testId });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
