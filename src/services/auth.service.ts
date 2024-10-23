import { LoginDto } from "@/common/dto/login.dto";
import { apiController } from "@/controllers/api.controller";
import { AuthResponseType, LoginResponseType } from "@/types/user.type";

export const authService = {
  login: async (loginRequest: LoginDto): Promise<LoginResponseType> => {
    return await apiController("/api/auth/login", "post", loginRequest);
  },
  getUserProfile: async (): Promise<AuthResponseType> => {
    return await apiController("/api/auth/profile", "get");
  },
};
