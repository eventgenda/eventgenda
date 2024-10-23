import { BaseResponseType } from "@/common/responses/response.type";

export type OrganizationType = {
  _id: string;
  name: string;
  description: string;
  profileImage: string;
  funding: number;
  coin: number;
  credit: number;
  createdEvent: string[];
  createdAt: string;
  updatedAt: string;
};

export type OrganizationResponseType = BaseResponseType & {
  data: OrganizationType;
};

export type OrganizationsResponseType = BaseResponseType & {
  data: OrganizationType[];
};
