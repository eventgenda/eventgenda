import { BlogType } from "@/types/blog.type";
import { create } from "zustand";

interface BlogStore {
  blog: BlogType;
  blogs: BlogType[];
  setBlog: (blog: BlogType) => void;
  setBlogs: (blogs: BlogType[]) => void;
}

export const BlogStore = create<BlogStore>((set) => ({
  blog: {} as BlogType,
  blogs: [],
  setBlog: (blog) => set({ blog }),
  setBlogs: (blogs) => set({ blogs }),
}));
