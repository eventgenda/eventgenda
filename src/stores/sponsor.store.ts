import { SponsorType } from "@/types/sponsor.type";
import { create } from "zustand";

interface SponsorStore {
  sponsor: SponsorType;
  sponsors: SponsorType[];
  setSponsor: (sponsor: SponsorType) => void;
  setSponsors: (sponsors: SponsorType[]) => void;
}

export const SponsorStore = create<SponsorStore>((set) => ({
  sponsor: {} as SponsorType,
  sponsors: [],
  setSponsor: (sponsor) => set({ sponsor }),
  setSponsors: (sponsors) => set({ sponsors }),
}));
