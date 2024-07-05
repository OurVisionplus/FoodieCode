import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MealsTitle } from "../meals/MealsTitle";
import { UserTitle } from "../user/UserTitle";

export const PaymentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
