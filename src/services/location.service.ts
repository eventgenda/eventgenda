import {
  CreateLocationDto,
  UpdateLocationDto,
} from "@/common/dto/location.dto";
import { apiController } from "@/controllers/api.controller";
import {
  LocationResponseType,
  LocationsResponseType,
} from "@/types/location.type";

export const locationService = {
  getLocations: async (): Promise<LocationsResponseType> => {
    return await apiController("/api/location", "get");
  },
  getLocation: async (id: string): Promise<LocationResponseType> => {
    return await apiController(`/api/location/${id}`, "get");
  },
  createLocation: async (
    location: CreateLocationDto,
  ): Promise<LocationResponseType> => {
    return await apiController("/api/location", "post", location);
  },
  updateLocation: async (
    id: string,
    location: UpdateLocationDto,
  ): Promise<LocationResponseType> => {
    return await apiController(`/api/location/${id}`, "put", location);
  },
  deleteLocation: async (id: string): Promise<LocationResponseType> => {
    return await apiController(`/api/location/${id}`, "delete");
  },
};
