import React, { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { IAppointment } from "../../models/environment";
import { CardsContainer, Container } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { getAppointment, saveAppointment } from "../../services/appointments";
import CreateAppointment from "../../components/CreateAppointment";

export default function Appointment() {
  const [open, setOpen] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<IAppointment[]>(
    getAppointment()
  );

  const save = (appointment: IAppointment) => {
    const app = { ...appointment, id: uuidv4() };
    console.log(new Date(app.date_start), `app`);
    setAppointments([...appointments, app]);
    saveAppointment(app);
  };

  const handleOpenState = () => setOpen(!open);

  return (
    <Container>
      <div>{open && <CreateAppointment open={open} action={save} />}</div>
      <CardsContainer>
        {appointments.map((appointment: IAppointment) => {
          return <Card key={appointment.id} item={appointment} />;
        })}
      </CardsContainer>
      <Button
        bottom={`5%`}
        self_alignment={`flex-end`}
        position={`fixed`}
        label={open ? `Keep it hidden` : `Create an Environment`}
        action={handleOpenState}
      />
    </Container>
  );
}
