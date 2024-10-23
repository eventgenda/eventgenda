import { LocationType } from "@/types/location.type";
import { create } from "zustand";

interface LocationStore {
  location: LocationType;
  locations: LocationType[];
  setLocation: (location: LocationType) => void;
  setLocations: (locations: LocationType[]) => void;
}

export const LocationStore = create<LocationStore>((set) => ({
  location: {} as LocationType,
  locations: [],
  setLocation: (location) => set({ location }),
  setLocations: (locations) => set({ locations }),
}));
