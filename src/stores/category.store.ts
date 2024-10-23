import { CategoryType } from "@/types/event.type";
import { create } from "zustand";

interface CategoryStore {
  category: CategoryType;
  categories: CategoryType[];
  setCategory: (category: CategoryType) => void;
  setCategories: (categories: CategoryType[]) => void;
}

export const CategoryStore = create<CategoryStore>((set) => ({
  category: {} as CategoryType,
  categories: [],
  setCategory: (category) => set({ category }),
  setCategories: (categories) => set({ categories }),
}));
