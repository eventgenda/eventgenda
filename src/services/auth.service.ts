import { LoginDto } from "@/common/dto/login.dto";
import { RegisterDto } from "@/common/dto/register.dto";
import { apiController } from "@/controllers/api.controller";
import { AuthResponseType, LoginResponseType } from "@/types/user.type";

export const authService = {
  login: async (loginRequest: LoginDto): Promise<LoginResponseType> => {
    return await apiController("/api/auth/login", "post", loginRequest);
  },
  register: async (registerRequest: RegisterDto): Promise<LoginResponseType> => {
    return await apiController("/api/auth/register", "post", registerRequest);
  },
  getUserProfile: async (): Promise<AuthResponseType> => {
    return await apiController("/api/auth/profile", "get");
  },
};
