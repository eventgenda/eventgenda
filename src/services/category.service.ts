import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from "@/common/dto/category.dto";
import { apiController } from "@/controllers/api.controller";
import {
  CategoriesResponseType,
  CategoryResponseType,
} from "@/types/category.type";

export const categoryService = {
  getCategories: async (): Promise<CategoriesResponseType> => {
    return await apiController("/api/category", "get");
  },
  getCategory: async (id: string): Promise<CategoryResponseType> => {
    return await apiController(`/api/category/${id}`, "get");
  },
  createCategory: async (
    category: CreateCategoryDto,
  ): Promise<CategoryResponseType> => {
    return await apiController("/api/category", "post", category);
  },
  updateCategory: async (
    id: string,
    category: UpdateCategoryDto,
  ): Promise<CategoryResponseType> => {
    return await apiController(`/api/category/${id}`, "put", category);
  },
  deleteCategory: async (id: string): Promise<CategoryResponseType> => {
    return await apiController(`/api/category/${id}`, "delete");
  },
};
