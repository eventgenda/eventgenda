import { LoginDto } from "@/common/dto/login.dto";
import { RegisterDto } from "@/common/dto/register.dto";
import { authService } from "@/services/auth.service";
import { useAuthStore } from "@/stores/auth.store";
import Cookies from "js-cookie";
import { useMutation, useQuery } from "react-query";

export const useAuth = () => {
  const cookies = Cookies;
  const { setAuthentication, setUser, action } = useAuthStore();

  const loginMutation = useMutation(
    async (authDto: LoginDto) => {
      return await authService.login(authDto);
    },
    {
      onSuccess: (data) => {
        setCookies(data.data.accessToken);
        userProfileQuery.refetch();
      },
    },
  );

  const registerMutation = useMutation(
    async (authDto: RegisterDto) => {
      return await authService.register(authDto);
    },
    {
      onSuccess: (data) => {
        setCookies(data.data.accessToken);
        userProfileQuery.refetch();
      },
    },
  );

  const setCookies = (accessToken: string) => {
    cookies.set("token", accessToken);
  };

  const userProfileQuery = useQuery(
    "userProfile",
    async () => {
      return await authService.getUserProfile();
    },
    {
      onSuccess: (data) => {
        setUser(data.data);
        setAuthentication(data.success);
      },
      onError: (error) => {
        console.error("Error fetching user profile:", error);
        setAuthentication(false);
      },
      enabled: !!cookies.get("token"),
      refetchOnWindowFocus: false,
    },
  );

  return {
    loginMutation,
    registerMutation,
    userProfileQuery,
    userProfile: userProfileQuery.data,
    userProfileLoading: userProfileQuery.isLoading,
    logout: action.logout,
    refetch: userProfileQuery.refetch,
  };
};
