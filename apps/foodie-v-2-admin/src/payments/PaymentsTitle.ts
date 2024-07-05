import { Payments as TPayments } from "../api/payments/Payments";

export const PAYMENTS_TITLE_FIELD = "stripePaymentId";

export const PaymentsTitle = (record: TPayments): string => {
  return record.stripePaymentId?.toString() || String(record.id);
};
