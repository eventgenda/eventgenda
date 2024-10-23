import { BaseResponseType } from "@/common/responses/response.type";

export type EventRuleType = {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type EventRuleResponseType = BaseResponseType & {
  data: EventRuleType;
};

export type EventRulesResponseType = BaseResponseType & {
  data: EventRuleType[];
};
