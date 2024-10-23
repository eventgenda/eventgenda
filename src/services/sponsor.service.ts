import { CreateSponsorDto, UpdateSponsorDto } from "@/common/dto/sponsor.dto";
import { apiController } from "@/controllers/api.controller";
import {
  SponsorResponseType,
  SponsorsResponseType,
} from "@/types/sponsor.type";

export const sponsorService = {
  getSponsors: async (): Promise<SponsorsResponseType> => {
    return await apiController("/api/sponsors", "get");
  },
  getSponsor: async (id: string): Promise<SponsorResponseType> => {
    return await apiController(`/api/sponsors/${id}`, "get");
  },
  createSponsor: async (
    sponsor: CreateSponsorDto,
  ): Promise<SponsorResponseType> => {
    return await apiController("/api/sponsors", "post", sponsor);
  },
  updateSponsor: async (
    id: string,
    sponsor: UpdateSponsorDto,
  ): Promise<SponsorResponseType> => {
    return await apiController(`/api/sponsors/${id}`, "put", sponsor);
  },
  deleteSponsor: async (id: string): Promise<SponsorResponseType> => {
    return await apiController(`/api/sponsors/${id}`, "delete");
  },
};
