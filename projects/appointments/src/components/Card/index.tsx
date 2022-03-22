import { IAppointment } from "../../models/environment";
import { IEnvironments } from "../../models/environments";
import { CardContainer } from "./styles";

type CardProps = {
  item: IEnvironments | IAppointment;
};

export default function Card({ item }: CardProps) {
  const itsToDay = (date: string) => {
    const instance = new Date();
    const currentDate = `${instance.getFullYear()}-${addZero(
      instance.getMonth() + 1
    )}-${addZero(instance.getDate())}`;

    return currentDate === date;
  };

  const addZero = (item: number) => (item < 10 ? `0${item}` : `${item}`);

  return (
    <CardContainer isItToday={itsToDay(item.date_start)}>
      <span>{item.title}</span>
      <span>{item.description}</span>
    </CardContainer>
  );
}
