import { apiController } from "@/controllers/api.controller";
import { UploadImageResponseType } from "@/types/upload.type";

export const uploadService = {
  uploadImage: async (formData: FormData): Promise<UploadImageResponseType> => {
    return await apiController("/api/uploads/upload", "post", formData);
  },
  deleteImage: async (public_id: string): Promise<UploadImageResponseType> => {
    return await apiController(`/api/uploads/destroy`, "post", { public_id });
  },
};
