import { BaseResponseType } from "@/common/responses/response.type";
import { EventRuleType } from "./event-rule.type";
import { LocationType } from "./location.type";
import { UserProfileType } from "./user.type";

export type UserType = {
  name: string;
  email: string;
  role: string;
};

export type CategoryType = {
  _id: string;
  name: string;
  description: string;
};

export type SponsorType = {
  name: string;
  logo: string;
  website: string;
};

export type LocationModelType = {
  name: string;
  address: string;
  city: string;
  country: string;
};

export type ProjectType = {
  name: string;
  description: string;
};

export type EventType = {
  _id: string;
  title: string;
  description: string;
  limit: number;
  categories: CategoryType[];
  createdBy: UserProfileType;
  eventStartDate: Date;
  eventEndDate: Date;
  registrationStartDate: Date;
  registrationEndDate: Date;
  participants: UserProfileType[];
  sponsor: SponsorType;
  rules: EventRuleType[];
  donate: UserType[];
  projects: ProjectType[];
  prizes: number[];
  thumbnail: string;
  location: LocationType;
  createdAt: Date;
  updatedAt: Date;
  amountRaised: number;
  amountRequired: number;
  status: string;
};

export type EventResponseType = BaseResponseType & {
  data: EventType;
};

export type EventsResponseType = BaseResponseType & {
  data: EventType[];
};
