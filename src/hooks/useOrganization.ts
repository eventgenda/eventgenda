import {
  CreateOrganizationDto,
  UpdateOrganizationDto,
} from "@/common/dto/organization.dto";
import { organizationService } from "@/services/organization.service";
import { OrganizationStore } from "@/stores/organization.store";
import { useMutation, useQuery } from "react-query";

export const useOrganization = (organizationId?: string) => {
  const { setOrganizations, setOrganization } = OrganizationStore();

  const organizationsQuery = useQuery(
    "organizations",
    async () => {
      return await organizationService.getOrganizations();
    },
    {
      onSuccess: (data) => {
        setOrganizations(data.data);
      },
    },
  );

  const organizationQuery = useQuery(
    ["organization", organizationId],
    async ({ queryKey }) => {
      const [, id] = queryKey;
      return await organizationService.getOrganization(id as string);
    },
    {
      onSuccess: (data) => {
        setOrganization(data.data);
      },
    },
  );

  const createOrganizationMutation = useMutation(
    async (organization: CreateOrganizationDto) => {
      return await organizationService.createOrganization(organization);
    },
    {
      onSuccess: (data) => {
        organizationsQuery.refetch();
      },
    },
  );

  const updateOrganizationMutation = useMutation(
    async ({
      organization,
      id,
    }: {
      organization: UpdateOrganizationDto;
      id: string;
    }) => {
      return await organizationService.updateOrganization(id, organization);
    },
    {
      onSuccess: (data) => {
        organizationsQuery.refetch();
      },
    },
  );

  const deleteOrganizationMutation = useMutation(
    async (id: string) => {
      return await organizationService.deleteOrganization(id);
    },
    {
      onSuccess: (data) => {
        organizationsQuery.refetch();
      },
    },
  );

  return {
    organizationsQuery,
    organizationQuery,
    createOrganizationMutation,
    updateOrganizationMutation,
    deleteOrganizationMutation,
  };
};
