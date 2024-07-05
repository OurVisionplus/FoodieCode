import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ChatsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="Recipient" source="recipient" />
        <TextInput label="Sender" source="sender" />
      </SimpleForm>
    </Create>
  );
};
