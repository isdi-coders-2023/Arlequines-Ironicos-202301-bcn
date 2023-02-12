import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When rendered and given the filterName 'Classics'", () => {
    test("Then it should show a button with the text 'Classics'", () => {
      const filterName = "Classics";

      render(
        <Button
          filter={() => (() => {}) as unknown as Promise<string | undefined>}
          filterName={filterName}
        />
      );
      const classicsButton = screen.getByRole("button", { name: "Classics" });

      expect(classicsButton).toBeInTheDocument();
    });
  });
  describe("When it receives a function and the user clicks on it", () => {
    test("Then it should call the received function", () => {
      const action = jest.fn();

      render(<Button filter={action} filterName={"Classics"} />);

      const button = screen.getByRole("button", { name: "Classics" });
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
