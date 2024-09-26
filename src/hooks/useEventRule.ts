import {
  CreateEventRuleDto,
  UpdateEventRuleDto,
} from "@/common/dto/event-rule.dto";
import { eventRuleService } from "@/services/event-rule.service";
import { EventRuleStore } from "@/stores/event-rule.store";
import { useMutation, useQuery } from "react-query";

export const useEventRule = (eventRuleId?: string) => {
  const { setEventRules, setEventRule } = EventRuleStore();

  const eventRulesQuery = useQuery(
    "eventRules",
    async () => {
      return await eventRuleService.getEventRules();
    },
    {
      onSuccess: (data) => {
        setEventRules(data.data);
      },
    },
  );

  const eventRuleQuery = useQuery(
    ["eventRule", eventRuleId],
    async ({ queryKey }) => {
      const [, id] = queryKey;
      return await eventRuleService.getEventRule(id as string);
    },
    {
      onSuccess: (data) => {
        setEventRule(data.data);
      },
    },
  );

  const createEventRuleMutation = useMutation(
    async (eventRule: CreateEventRuleDto) => {
      return await eventRuleService.createEventRule(eventRule);
    },
    {
      onSuccess: (data) => {
        eventRulesQuery.refetch();
      },
    },
  );

  const updateEventRuleMutation = useMutation(
    async ({
      eventRule,
      id,
    }: {
      eventRule: UpdateEventRuleDto;
      id: string;
    }) => {
      return await eventRuleService.updateEventRule(id, eventRule);
    },
    {
      onSuccess: (data) => {
        eventRulesQuery.refetch();
      },
    },
  );

  const deleteEventRuleMutation = useMutation(
    async (id: string) => {
      return await eventRuleService.deleteEventRule(id);
    },
    {
      onSuccess: (data) => {
        eventRulesQuery.refetch();
      },
    },
  );

  return {
    eventRulesQuery,
    eventRuleQuery,
    createEventRuleMutation,
    updateEventRuleMutation,
    deleteEventRuleMutation,
  };
};
