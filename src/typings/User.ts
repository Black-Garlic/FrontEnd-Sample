export interface User {
  profileId: string;
  nickname: string;
  email: string;
  accessToken?: string;
  refreshToken?: string;
}
