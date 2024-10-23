import { RewardType } from "@/constants/reward.constant";
import { create } from "zustand";

interface RewardStore {
  reward: RewardType;
  rewards: RewardType[];
  setReward: (reward: RewardType) => void;
  setRewards: (rewards: RewardType[]) => void;
}

export const RewardStore = create<RewardStore>((set) => ({
  reward: {} as RewardType,
  rewards: [],
  setReward: (reward) => set({ reward }),
  setRewards: (rewards) => set({ rewards }),
}));
