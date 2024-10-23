export type CreateEventRuleDto = {
  name: string;
  description: string;
};

export type UpdateEventRuleDto = {
  name?: string;
  description?: string;
};
