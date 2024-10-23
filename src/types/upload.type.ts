import { BaseResponseType } from "@/common/responses/response.type";

export type UploadIMageType = {
  public_id: string;
  url: string;
};

export type UploadImageResponseType = BaseResponseType & {
  data: UploadIMageType;
};
