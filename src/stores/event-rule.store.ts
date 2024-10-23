import { EventRuleType } from "@/types/event-rule.type";
import { create } from "zustand";

interface EventRuleStore {
  eventRule: EventRuleType;
  eventRules: EventRuleType[];
  setEventRule: (eventRule: EventRuleType) => void;
  setEventRules: (eventRules: EventRuleType[]) => void;
}

export const EventRuleStore = create<EventRuleStore>((set) => ({
  eventRule: {} as EventRuleType,
  eventRules: [],
  setEventRule: (eventRule) => set({ eventRule }),
  setEventRules: (eventRules) => set({ eventRules }),
}));
