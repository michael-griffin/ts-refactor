import { render } from "@testing-library/react";
import App from "./App";



it("renders without crashing", function () {
  render(<App />);
});

it("matches snapshot", function () {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});
