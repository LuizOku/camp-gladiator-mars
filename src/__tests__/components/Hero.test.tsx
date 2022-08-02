import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { Hero } from "../../components";

import "../../setupTests";

const baseProps = {};

const renderComponent = (customProps?: { testId?: string }) => {
  const props = { ...baseProps, ...customProps };

  return render(
    <Router>
      <Hero {...props} />
    </Router>
  );
};

describe("<Hero />", () => {
  it("renders without crashing", () => {
    const view = renderComponent();
    expect(view).toMatchSnapshot();
  });

  it("should have the title", () => {
    renderComponent();
    expect(
      screen.getByText("Camp Gladiator is going to Mars...")
    ).toBeInTheDocument();
  });

  it("should have the subtitle", () => {
    renderComponent();
    expect(
      screen.getByText("Start now your virtual workouts!")
    ).toBeInTheDocument();
  });

  it("should have a data-test-id", () => {
    const testId = "test-hero";
    renderComponent({ testId });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
