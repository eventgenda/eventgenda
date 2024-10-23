import {
  CreateOrganizationDto,
  UpdateOrganizationDto,
} from "@/common/dto/organization.dto";
import { apiController } from "@/controllers/api.controller";
import {
  OrganizationResponseType,
  OrganizationsResponseType,
} from "@/types/organization.type";

export const organizationService = {
  getOrganizations: async (): Promise<OrganizationsResponseType> => {
    return await apiController("/api/organization", "get");
  },
  getOrganization: async (id: string): Promise<OrganizationResponseType> => {
    return await apiController(`/api/organization/${id}`, "get");
  },
  createOrganization: async (
    organization: CreateOrganizationDto,
  ): Promise<OrganizationResponseType> => {
    return await apiController("/api/organization", "post", organization);
  },
  updateOrganization: async (
    id: string,
    organization: UpdateOrganizationDto,
  ): Promise<OrganizationResponseType> => {
    return await apiController(`/api/organization/${id}`, "put", organization);
  },
  deleteOrganization: async (id: string): Promise<OrganizationResponseType> => {
    return await apiController(`/api/organization/${id}`, "delete");
  },
};
