import { CreateSponsorDto, UpdateSponsorDto } from "@/common/dto/sponsor.dto";
import { sponsorService } from "@/services/sponsor.service";
import { SponsorStore } from "@/stores/sponsor.store";
import { useMutation, useQuery } from "react-query";

export const useSponsor = (sponsorId?: string) => {
  const { setSponsors, setSponsor } = SponsorStore();

  const sponsorsQuery = useQuery(
    "sponsors",
    async () => {
      return await sponsorService.getSponsors();
    },
    {
      onSuccess: (data) => {
        setSponsors(data.data);
      },
    },
  );

  const sponsorQuery = useQuery(
    ["sponsor", sponsorId],
    async ({ queryKey }) => {
      const [, id] = queryKey;
      return await sponsorService.getSponsor(id as string);
    },
    {
      onSuccess: (data) => {
        setSponsor(data.data);
      },
    },
  );

  const createSponsorMutation = useMutation(
    async (sponsor: CreateSponsorDto) => {
      return await sponsorService.createSponsor(sponsor);
    },
    {
      onSuccess: (data) => {
        sponsorsQuery.refetch();
      },
    },
  );

  const updateSponsorMutation = useMutation(
    async ({ sponsor, id }: { sponsor: UpdateSponsorDto; id: string }) => {
      return await sponsorService.updateSponsor(id, sponsor);
    },
    {
      onSuccess: (data) => {
        sponsorsQuery.refetch();
      },
    },
  );

  const deleteSponsorMutation = useMutation(
    async (id: string) => {
      return await sponsorService.deleteSponsor(id);
    },
    {
      onSuccess: (data) => {
        sponsorsQuery.refetch();
      },
    },
  );

  return {
    sponsorsQuery,
    sponsorQuery,
    createSponsorMutation,
    updateSponsorMutation,
    deleteSponsorMutation,
  };
};
