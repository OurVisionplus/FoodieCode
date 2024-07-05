import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { MealsTitle } from "../meals/MealsTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="meal.id" reference="Meals" label="Meal">
          <SelectInput optionText={MealsTitle} />
        </ReferenceInput>
        <TextInput label="text" multiline source="text" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
