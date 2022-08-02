import { render, screen, act } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import WorkoutDetail from "../../pages/WorkoutDetail";
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

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    workoutId: "3",
  }),
}));

const renderComponent = () => {
  const store = setupStore({
    workout: {
      list: workouts,
    },
  });
  return render(
    <Provider store={store}>
      <Router>
        <WorkoutDetail />
      </Router>
    </Provider>
  );
};

describe("<WorkoutDetail />", () => {
  it("renders without crashing", async () => {
    const view = renderComponent();
    expect(view).toMatchSnapshot();
    await act(async () => {
      await promise;
    });
  });

  it("should have the workout title", async () => {
    renderComponent();
    expect(screen.getByText(workouts[0].title)).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the workout description", async () => {
    const promise = Promise.resolve();
    renderComponent();
    expect(screen.getByText(workouts[0].description)).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the workout level tag", async () => {
    renderComponent();
    expect(
      screen.getByText(`Level ${workouts[0].levelTag}`)
    ).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the workout impact tag", async () => {
    renderComponent();
    expect(
      screen.getByText(`Impact ${workouts[0].impactTag}`)
    ).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the workout duration tag", async () => {
    renderComponent();
    expect(
      screen.getByText(`${workouts[0].duration} mins`)
    ).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });

  it("should have the workout video", async () => {
    renderComponent();
    expect(screen.getByTestId("video-player")).toBeInTheDocument();
    await act(async () => {
      await promise;
    });
  });
});
