import { BaseResponseType } from "@/common/responses/response.type";

export type RewardType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdDate: string;
  updatedDate: string;
};

export type RewardResponseType = BaseResponseType & {
  data: RewardType;
};

export type RewardsResponseType = BaseResponseType & {
  data: RewardType[];
};
