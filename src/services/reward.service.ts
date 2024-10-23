import { CreateRewardDto, UpdateRewardDto } from "@/common/dto/reward.dto";
import { apiController } from "@/controllers/api.controller";
import { RewardResponseType, RewardsResponseType } from "@/types/reward.type";

export const rewardService = {
  getRewards: async (): Promise<RewardsResponseType> => {
    return await apiController("/api/reward", "get");
  },
  getReward: async (id: string): Promise<RewardResponseType> => {
    return await apiController(`/api/reward/${id}`, "get");
  },
  createReward: async (
    reward: CreateRewardDto,
  ): Promise<RewardResponseType> => {
    return await apiController("/api/reward", "post", reward);
  },
  updateReward: async (
    id: string,
    reward: UpdateRewardDto,
  ): Promise<RewardResponseType> => {
    return await apiController(`/api/reward/${id}`, "put", reward);
  },
  deleteReward: async (id: string): Promise<RewardResponseType> => {
    return await apiController(`/api/reward/${id}`, "delete");
  },
};
