import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { Header } from "../../components";

import "../../setupTests";

const baseProps = {};

const renderComponent = (customProps?: { testId?: string }) => {
  const props = { ...baseProps, ...customProps };

  return render(
    <Router>
      <Header {...props} />
    </Router>
  );
};

describe("<Header />", () => {
  it("renders without crashing", () => {
    const view = renderComponent();
    expect(view).toMatchSnapshot();
  });

  it("should have the Camp Gladiator logo", () => {
    renderComponent();
    expect(screen.getByTestId("header-logo-img")).toBeInTheDocument();
  });

  it("should have a data-test-id", () => {
    const testId = "test-header";
    renderComponent({ testId });
    const element = screen.getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
});
