import { render, screen, act } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import WorkoutDashboard from "../../pages/WorkoutDashboard";
import { setupStore } from "../../store";
import "../../setupTests";

const workouts = [
  {
    description:
      "Enjoy a fun and high energy workout with Amber. We will engage a full body workout and get your heart rate up!",
    thumbnail:
      "https://cgcdn.s3.amazonaws.com/nation/users/UID-W1405610919UID-53c7eba7a992b.png",
    levelTag: "beginner",
    media: "https://virtual-library.s3.amazonaws.com/Week2-AmberAutrey.mp4",
    title: "Strength and Agility by Amber Autrey",
    impactTag: "high",
    id: "3",
    trainerId: "3",
    duration: 60,
  },
  {
    description:
      "Enjoy a fun and low impact workout with Claire. We will engage a full body workout and get your heart rate up!",
    thumbnail:
      "https://cgcdn.s3.amazonaws.com/nation/users/UID-D1489527062UID-58c86116311d9.png",
    levelTag: "beginner",
    media: "https://virtual-library.s3.amazonaws.com/Week2-ClaireDonahoe.mp4",
    title: "Strength and Agility by Claire Donahoe",
    impactTag: "low",
    id: "4",
    trainerId: "4",
    duration: 60,
  },
];

const promise = Promise.resolve();

const renderComponent = () => {
  const store = setupStore({
    workout: {
      list: workouts,
    },
  });
  return render(
    <Provider store={store}>
      <Router>
        <WorkoutDashboard />
      </Router>
    </Provider>
  );
};

describe("<WorkoutDashboard />", () => {
  it("renders without crashing", async () => {
    const view = renderComponent();
    expect(view).toMatchSnapshot();
    await act(async () => {
      await promise;
    });
  });

  it("should have the hero section", async () => {
    renderComponent();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the title", async () => {
    renderComponent();
    expect(
      screen.getByText("Find the exercise that fits to you")
    ).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the level select of the filter", async () => {
    renderComponent();
    expect(screen.getByText("Level")).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the impact select of the filter", async () => {
    renderComponent();
    expect(screen.getByText("Impact")).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the Filter button", async () => {
    renderComponent();
    expect(screen.getByText("Filter")).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the workout cards", async () => {
    renderComponent();
    for (const work of workouts) {
      expect(screen.getByTestId(`workout-card-${work.id}`)).toBeInTheDocument();
      await act(async () => {
        await promise;
      });
    }
  });
});
