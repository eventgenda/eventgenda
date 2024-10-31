export type CreateEventDto = {
  title: string;
  description: string;
  limit: number;
  categories: string[];
  eventStartDate: string;
  eventEndDate: string;
  registrationStartDate: string;
  registrationEndDate: string;
  prizes: number[];
  thumbnail: string;
  location: string;
  amountRequired: number;
  rules: string[];
  status: string;
};

export type UpdateEventDto = {
  title: string;
  description: string;
  limit: number;
  categories: string[];
  eventStartDate: string;
  eventEndDate: string;
  registrationStartDate: string;
  registrationEndDate: string;
  prizes: number[];
  thumbnail: string;
  location: string;
  amountRequired: number;
  rules: string[];
  status: string;
};

export type FundingEventDto = {
  amount: number;
};
