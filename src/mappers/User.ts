import { UserData, UserInfo } from "../types/User";

export const sanitizeUserInfo = (user: UserData): UserInfo => {
  const { name, email, id, login, picture } = user;
  const { value } = id;
  const { uuid } = login;
  const { thumbnail } = picture;
  return {
    name: `${name.first} ${name.last}`,
    email: email,
    id: `${uuid || value}`,
    thumbnailUrl: thumbnail,
  };
};
