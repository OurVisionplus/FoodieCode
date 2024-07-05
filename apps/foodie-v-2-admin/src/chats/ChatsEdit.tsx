import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ChatsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="Recipient" source="recipient" />
        <TextInput label="Sender" source="sender" />
      </SimpleForm>
    </Edit>
  );
};
