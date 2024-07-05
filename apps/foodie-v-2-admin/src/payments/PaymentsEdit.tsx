import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MealsTitle } from "../meals/MealsTitle";
import { UserTitle } from "../user/UserTitle";

export const PaymentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="meal.id" reference="Meals" label="Meal">
          <SelectInput optionText={MealsTitle} />
        </ReferenceInput>
        <TextInput label="stripePaymentId" source="stripePaymentId" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
