import { CreateRewardDto, UpdateRewardDto } from "@/common/dto/reward.dto";
import { rewardService } from "@/services/reward.service";
import { RewardStore } from "@/stores/reward.store";
import { useMutation, useQuery } from "react-query";

export const useReward = (rewardId?: string) => {
  const { setRewards, setReward } = RewardStore();

  const rewardsQuery = useQuery(
    "rewards",
    async () => {
      return await rewardService.getRewards();
    },
    {
      onSuccess: (data) => {
        setRewards(data.data);
      },
    },
  );

  const rewardQuery = useQuery(
    ["reward", rewardId],
    async ({ queryKey }) => {
      const [, id] = queryKey;
      return await rewardService.getReward(id as string);
    },
    {
      onSuccess: (data) => {
        setReward(data.data);
      },
    },
  );

  const createRewardMutation = useMutation(
    async (reward: CreateRewardDto) => {
      return await rewardService.createReward(reward);
    },
    {
      onSuccess: (data) => {
        rewardsQuery.refetch();
      },
    },
  );

  const updateRewardMutation = useMutation(
    async ({ reward, id }: { reward: UpdateRewardDto; id: string }) => {
      return await rewardService.updateReward(id, reward);
    },
    {
      onSuccess: (data) => {
        rewardsQuery.refetch();
      },
    },
  );

  const deleteRewardMutation = useMutation(
    async (id: string) => {
      return await rewardService.deleteReward(id);
    },
    {
      onSuccess: (data) => {
        rewardsQuery.refetch();
      },
    },
  );

  return {
    rewardsQuery,
    rewardQuery,
    createRewardMutation,
    updateRewardMutation,
    deleteRewardMutation,
  };
};
