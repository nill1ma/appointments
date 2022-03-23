import { Fragment, useState } from "react";
import { IEnvironments } from "../../models/environments";
import Button from "../Button";
import {
  Container,
  FieldsArea,
  FieldsContainer,
  InputText,
  TextArea,
} from "./styles";

type HeaderProps = {
  action: (environment: IEnvironments) => void;
};

type Fields = {
  label: string;
  name: string;
  type?: string;
};

export default function Header({ action }: HeaderProps) {
  const [environment, setEnvironment] = useState<IEnvironments>(
    {} as IEnvironments
  );

  function actionButton() {
    action(environment);
  }

  const fillEnvironment = (event: any) => {
    const { name, value } = event.target;
    setEnvironment((previous: IEnvironments) => ({
      ...previous,
      [name]: value,
    }));
  };

  const fields: Fields[] = [
    { label: `Title`, name: `title`, type: `text` },
    { label: `City`, name: `city`, type: `text` },
    { label: `State`, name: `state`, type: `text` },
    { label: `Country`, name: `country`, type: `text` },
    { label: `Description`, name: `description` },
  ];
  return (
    <Container>
      <FieldsContainer hasPadding={false}>
        <FieldsArea>
          {fields
            .filter(({ type }: Fields) => type === `text`)
            .map((field: Fields) => {
              return (
                <Fragment key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <InputText
                    onChange={(e: any) => fillEnvironment(e)}
                    name={field.name}
                    id={field.name}
                  />
                </Fragment>
              );
            })}
        </FieldsArea>
        <FieldsArea>
          {fields
            .filter(({ type }: Fields) => !type)
            .map((field: Fields) => {
              return (
                <Fragment key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <TextArea
                    onChange={(e: any) => fillEnvironment(e)}
                    name={field.name}
                    id={field.name}
                  />
                </Fragment>
              );
            })}
        </FieldsArea>
      </FieldsContainer>
      <FieldsContainer hasPadding={true}>
        <Button action={actionButton} label={`save`} />
      </FieldsContainer>
    </Container>
  );
}
