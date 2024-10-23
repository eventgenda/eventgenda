export type CreateOrganizationDto = {
  name: string;
  description: string;
};

export type UpdateOrganizationDto = {
  name?: string;
  description?: string;
};
