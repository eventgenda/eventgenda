import {
  CreateEventRuleDto,
  UpdateEventRuleDto,
} from "@/common/dto/event-rule.dto";
import { apiController } from "@/controllers/api.controller";
import {
  EventRuleResponseType,
  EventRulesResponseType,
} from "@/types/event-rule.type";

export const eventRuleService = {
  getEventRules: async (): Promise<EventRulesResponseType> => {
    return await apiController("/api/event-rule", "get");
  },
  getEventRule: async (id: string): Promise<EventRuleResponseType> => {
    return await apiController(`/api/event-rule/${id}`, "get");
  },
  createEventRule: async (
    eventRule: CreateEventRuleDto,
  ): Promise<EventRuleResponseType> => {
    return await apiController("/api/event-rule", "post", eventRule);
  },
  updateEventRule: async (
    id: string,
    eventRule: UpdateEventRuleDto,
  ): Promise<EventRuleResponseType> => {
    return await apiController(`/api/event-rule/${id}`, "put", eventRule);
  },
  deleteEventRule: async (id: string): Promise<EventRuleResponseType> => {
    return await apiController(`/api/event-rule/${id}`, "delete");
  },
};
