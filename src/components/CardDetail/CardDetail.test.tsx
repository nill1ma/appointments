import { fireEvent, render, screen } from "@testing-library/react";
import CardDetail from ".";
import { IAppointment } from "../../models/appointments";
import "@testing-library/jest-dom";
describe("CardDetail", () => {
	const appointment: IAppointment = {
		id: "1",
		title: "Title",
		description: "Description",
		start: "2022-03-25T10:00:00",
		end: "2022-03-25T11:00:59",
	};

	it("Should be defined", () => {
		const setDetail = jest.fn();
		const utils = render(
			<CardDetail detail={appointment} setDetail={setDetail} />
		);
		expect(utils).toBeDefined();
	});

	it("Should be defined and turn it undefined after click", () => {
		const setDetail = jest.fn();
		render(<CardDetail detail={appointment} setDetail={setDetail} />);
		const start_date = screen.getByText("Start: 2022-03-25 - 10:00:00");
		expect(start_date).toBeInTheDocument();
		const close_area = screen.getByTestId("close-area");
		fireEvent.click(close_area);
	});
});
