import {
	faChevronCircleDown as rightNow,
	faCircle as pastEvent,
	faClock as upComing,
	faTrashAlt,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { IAppointment } from "../../models/appointments";
import { formatDate } from "../../utils/handle-date";
import { CardContainer, Icon } from "./styles";

type CardProps = {
	item: IAppointment;
	setDetail: (item: IAppointment) => void;
	removeCard: (item: IAppointment) => void;
};

type IconsSignal = {
	icon: IconDefinition;
	name: string;
	active: boolean;
	color: string;
};

export default function Card({ item, setDetail, removeCard }: CardProps) {
	const date = new Date();
	const start = new Date(item.start).getTime();
	const end = new Date(item.end).getTime();
	const isItWithin = useCallback(() => {
		return date.getTime() >= start && date.getTime() <= end;
	}, [item.end, item.start]);
	const [itIsWithin, setItIsWithin] = useState(isItWithin());

	const [icons, setIcons] = useState<IconsSignal[]>([
		{
			icon: upComing,
			name: "upComing",
			active: date.getTime() < start,
			color: "#87CEEB",
		},
		{
			icon: rightNow,
			name: "rightNow",
			active: date.getTime() >= start && date.getTime() <= end,
			color: "green",
		},
		{
			icon: pastEvent,
			name: "pastEvent",
			active: date.getTime() > end,
			color: "gray",
		},
	]);

	const handleIconActive = (ref: string) => {
		switch (ref) {
			case "upComing":
				return date.getTime() < start;
			case "rightNow":
				return date.getTime() >= start && date.getTime() <= end;
			case "pastEvent":
				return date.getTime() >= end;
			default:
				return date.getTime() > end;
		}
	};

	useEffect(() => {
		setTimeout(() => {
			!handleIconActive("") &&
				setIcons((previous: IconsSignal[]) => {
					return [
						...previous.map((prev: IconsSignal) => {
							const active = handleIconActive(prev.name);
							return active ? { ...prev, active } : prev;
						}),
					];
				});
			console.log("Testing...");
		}, 30000);
	}, [icons]);

	return (
		<CardContainer onClick={() => setDetail(item)}>
			<div>
				{icons.map(({ icon, name, active, color }) => {
					return (
						active && (
							<Icon
								key={name}
								onClick={() => removeCard(item)}
								color={color}
								size={"sm"}
								icon={icon}
							/>
						)
					);
				})}
				<Icon onClick={() => removeCard(item)} size={"sm"} icon={faTrashAlt} />
			</div>
			<span>{item.title}</span>
			<div>
				<span>Starts: {formatDate(item.start.split(" ")[0])}</span>
			</div>
		</CardContainer>
	);
}
