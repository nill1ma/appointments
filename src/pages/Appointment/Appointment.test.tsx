import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Appointment from ".";

describe("Appointment", () => {
	it("Should return defined component", () => {
		const utils = render(<Appointment />);
		expect(utils).toBeDefined();
	});

	it("Should load Create Appointment component when click in Create an Environment", () => {
		render(<Appointment />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		const placeholder = screen.getAllByPlaceholderText("Type a Description");
		expect(placeholder).toMatchSnapshot();
	});

	it("Should make sure that there is the correct text on button before click on Create an Environment", () => {
		render(<Appointment />);
		const placeholder = screen.getAllByText("Create an Environment");
		expect(placeholder).toMatchSnapshot();
	});

	it("Should make sure that there is the correct text on button after click on Create an Environment", () => {
		render(<Appointment />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		const placeholderButton = screen.getAllByText("Keep it hidden");
		expect(placeholderButton).toMatchSnapshot();
		fireEvent.click(button);
		const placeholderInitialState = screen.getAllByText(
			"Create an Environment"
		);
		expect(placeholderInitialState).toMatchSnapshot();
	});

	it("Should make sure that there is Save button after click on Create an Environment", () => {
		render(<Appointment />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		const placeholderInitialState = screen.getAllByText("save");
		expect(placeholderInitialState).toMatchSnapshot();
	});
});
