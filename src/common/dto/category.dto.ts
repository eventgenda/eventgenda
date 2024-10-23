export type CreateCategoryDto = {
  name: string;
  description: string;
};

export type UpdateCategoryDto = {
  name?: string;
  description?: string;
};
