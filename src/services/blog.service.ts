import { CreateBlogDto, UpdateBlogDto } from "@/common/dto/blog.dto";
import { apiController } from "@/controllers/api.controller";
import { BlogResponseType, BlogsResponseType } from "@/types/blog.type";

export const blogService = {
  getBlogs: async (): Promise<BlogsResponseType> => {
    return await apiController("/api/blogs", "get");
  },
  getBlog: async (id: string): Promise<BlogResponseType> => {
    return await apiController(`/api/blogs/${id}`, "get");
  },
  createBlog: async (blog: CreateBlogDto): Promise<BlogResponseType> => {
    return await apiController("/api/blogs", "post", blog);
  },
  updateBlog: async (
    id: string,
    blog: UpdateBlogDto,
  ): Promise<BlogResponseType> => {
    return await apiController(`/api/blogs/${id}`, "put", blog);
  },
  deleteBlog: async (id: string): Promise<BlogResponseType> => {
    return await apiController(`/api/blogs/${id}`, "delete");
  },
};
