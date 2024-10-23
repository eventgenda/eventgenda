import { BaseResponseType } from "@/common/responses/response.type";

export type SponsorType = {
  _id: string;
  user: string;
  event: string;
  amount: number;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export type SponsorResponseType = BaseResponseType & {
  data: SponsorType;
};

export type SponsorsResponseType = BaseResponseType & {
  data: SponsorType[];
};
