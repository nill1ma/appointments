import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Appointment from ".";
import CreateAppointment from "../../components/CreateAppointment";

describe("Appointment", () => {
	it("Should return defined component", () => {
		const utils = render(<Appointment />);
		expect(utils).toBeDefined();
	});

	it("Should load Create Appointment component when click in Create an Environment", () => {
		render(<Appointment />);
		const button = screen.getByRole("button");
		fireEvent.click(button);
		expect(
			<CreateAppointment isOpened={true} action={jest.fn()} />
		).toBeDefined();
	});
});
