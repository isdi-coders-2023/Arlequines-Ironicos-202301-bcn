import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given the 'Loader' component", () => {
  describe("When is page is loading", () => {
    test("Then it should show an image of a beer", () => {
      render(<Loader />);
      const areaLabelText = screen.getByRole("img", {
        name: "logo of a beer",
      });

      expect(areaLabelText).toBeInTheDocument();
    });
  });
});
