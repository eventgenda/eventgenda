import { OrganizationType } from "@/types/organization.type";
import { create } from "zustand";

interface OrganizationStore {
  organization: OrganizationType;
  organizations: OrganizationType[];
  setOrganization: (organization: OrganizationType) => void;
  setOrganizations: (organizations: OrganizationType[]) => void;
}

export const OrganizationStore = create<OrganizationStore>((set) => ({
  organization: {} as OrganizationType,
  organizations: [],
  setOrganization: (organization) => set({ organization }),
  setOrganizations: (organizations) => set({ organizations }),
}));
