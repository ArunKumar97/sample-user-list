import axios, { AxiosResponse } from "axios";
import { UserInfo, UserListResponse, UserData } from "../types/User";
import { sanitizeUserInfo } from "../mappers/User";
class UserService {
  static endPoint: string = "https://randomuser.me/api";

  static fetchUsers = async (): Promise<UserInfo[]> => {
    try {
      const config = {
        url: `${this.endPoint}/`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data }: AxiosResponse<UserListResponse> = await axios(config);
      const { results = [] } = data;
      return results.map((result: UserData) => sanitizeUserInfo(result));
    } catch (err) {
      console.log("something went wrong...", err);
      return [];
    }
  };
}

export default UserService;
