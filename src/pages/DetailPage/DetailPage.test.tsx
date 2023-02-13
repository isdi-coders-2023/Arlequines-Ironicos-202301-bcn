import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";

describe("Given the DetailPage", () => {
  describe("When rendered", () => {
    test("Then it should show a heading with the text 'DetalPage'", () => {
      const pageTitle = "DetailPage";

      render(<DetailPage />);
      const heading = screen.getByRole("heading", { name: pageTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
