import { render, screen } from "@testing-library/react";
import UiContextWrapper from "../../store/contexts/ui/UiContextWrapper";
import Loader from "./Loader";

describe("Given the 'Loader' component", () => {
  describe("When rendered", () => {
    test("Then it should show a loader with the aria-label atributte 'is loading...'", () => {
      render(
        <UiContextWrapper>
          <Loader />
        </UiContextWrapper>
      );
      const areaLabelText = screen.getByRole("dialog", {
        name: "page is loading...",
      });

      expect(areaLabelText).toBeInTheDocument();
    });
  });
});
