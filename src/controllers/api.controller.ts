import { CreateBlogDto, UpdateBlogDto } from "@/common/dto/blog.dto";
import {
  CreateLocationDto,
  UpdateLocationDto,
} from "@/common/dto/location.dto";
import { LoginDto } from "@/common/dto/login.dto";
import {
  CreateOrganizationDto,
  UpdateOrganizationDto,
} from "@/common/dto/organization.dto";
import { CreateSponsorDto, UpdateSponsorDto } from "@/common/dto/sponsor.dto";
import { DestroyImageDto } from "@/common/dto/upload.dto";
import axiosInstance from "@/services/api.service";
import axios from "axios";

export async function apiController<T>(
  url: string,
  method: "get" | "post" | "put" | "patch" | "delete",
  data?:
    | LoginDto
    | CreateBlogDto
    | UpdateBlogDto
    | CreateLocationDto
    | UpdateLocationDto
    | CreateSponsorDto
    | UpdateSponsorDto
    | CreateOrganizationDto
    | UpdateOrganizationDto
    | FormData
    | DestroyImageDto,
): Promise<T> {
  try {
    const response = await axiosInstance.request({ url, method, data });
    return response.data;
  } catch (error) {
    let errorMessage: string;
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = "An unknown error occurred";
    }
    return Promise.reject(errorMessage);
  }
}
