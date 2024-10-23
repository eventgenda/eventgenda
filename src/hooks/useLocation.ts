import {
  CreateLocationDto,
  UpdateLocationDto,
} from "@/common/dto/location.dto";
import { locationService } from "@/services/location.service";
import { LocationStore } from "@/stores/location.store";
import { useMutation, useQuery } from "react-query";

export const useLocation = (locationId?: string) => {
  const { setLocations, setLocation } = LocationStore();

  const locationsQuery = useQuery(
    "locations",
    async () => {
      return await locationService.getLocations();
    },
    {
      onSuccess: (data) => {
        setLocations(data.data);
      },
    },
  );

  const locationQuery = useQuery(
    ["location", locationId],
    async ({ queryKey }) => {
      const [, id] = queryKey;
      return await locationService.getLocation(id as string);
    },
    {
      onSuccess: (data) => {
        setLocation(data.data);
      },
    },
  );

  const createLocationMutation = useMutation(
    async (location: CreateLocationDto) => {
      return await locationService.createLocation(location);
    },
    {
      onSuccess: (data) => {
        locationsQuery.refetch();
      },
    },
  );

  const updateLocationMutation = useMutation(
    async ({ location, id }: { location: UpdateLocationDto; id: string }) => {
      return await locationService.updateLocation(id, location);
    },
    {
      onSuccess: (data) => {
        locationsQuery.refetch();
      },
    },
  );

  const deleteLocationMutation = useMutation(
    async (id: string) => {
      return await locationService.deleteLocation(id);
    },
    {
      onSuccess: (data) => {
        locationsQuery.refetch();
      },
    },
  );

  return {
    locationsQuery,
    locationQuery,
    createLocationMutation,
    updateLocationMutation,
    deleteLocationMutation,
  };
};
