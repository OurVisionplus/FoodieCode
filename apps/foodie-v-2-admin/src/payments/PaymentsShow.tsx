import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MEALS_TITLE_FIELD } from "../meals/MealsTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PaymentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Meal" source="meals.id" reference="Meals">
          <TextField source={MEALS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="stripePaymentId" source="stripePaymentId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
