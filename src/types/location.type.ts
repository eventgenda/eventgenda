import { BaseResponseType } from "@/common/responses/response.type";

export type LocationType = {
  _id: string;
  name: string;
  location: string;
  prices: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type LocationResponseType = BaseResponseType & {
  data: LocationType;
};

export type LocationsResponseType = BaseResponseType & {
  data: LocationType[];
};
