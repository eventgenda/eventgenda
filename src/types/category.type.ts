import { BaseResponseType } from "@/common/responses/response.type";

export type CreategoryType = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CategoryResponseType = BaseResponseType & {
  data: CreategoryType;
};

export type CategoriesResponseType = BaseResponseType & {
  data: CreategoryType[];
};
