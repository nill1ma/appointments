import React, {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  useState,
} from "react";
import { IAppointment } from "../../models/environment";
import { saveEnvironment } from "../../services/environments";
import Button from "../Button";
import { Container, InputArea, InputsContainer } from "./styles";

type Inputs = {
  name: string;
  label: string;
  type: string;
};

type CreateAppointmentProps = {
  open: boolean;
  action: (appointment: IAppointment) => void;
};

export default function  CreateAppointment({
  open,
  action,
}: CreateAppointmentProps) {
  const inputs: Inputs[] = [
    { name: `title`, label: `Title:`, type: `text` },
    { name: `description`, label: `Description:`, type: `text` },
    { name: `date_start`, label: `Date Start:`, type: `date` },
    { name: `date_end`, label: `Date End:`, type: `date` },
  ];

  const [appointment, setAppointment] = useState<IAppointment>(
    {} as IAppointment
  );

  const useAction = () => {
    console.log(appointment, `appointment`)
    action(appointment);
  };

  const hadleAppointment = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAppointment((previous: IAppointment) => {
      return { ...previous, [name]: value };
    });
  };

  return (
    <Container open={open}>
      <InputsContainer>
      {inputs.map(({ name, label, type }: Inputs) => {
        return (
          <InputArea>
            <label htmlFor={name}>{label}</label>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                hadleAppointment(e)
              }
              type={type}
              name={name}
              id={name}
            />
          </InputArea>
        );
      })}
      </InputsContainer>
      <Button label={`save`} action={useAction} />
    </Container>
  );
}
