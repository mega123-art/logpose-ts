export type NewUrl = {
  shortCode: string;
  longUrl: string;
  createdBy: string;
};
export type UpdateCode = {
  shortCode: string;
};
export type UpdateUrl = {
  longUrl: string;
};
export type NewEntry = {
  shortCode: string;
  clicked_at: Date;
  ip_address: string;
  user_agent: string | null;
  browser: string | null;
  device: string | null;
  country_code: string | null;
  referer: string | null;
};
export type NewUser = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  hashedPassword: string;
};
export type RegisterRequest = {};
export type LoginRequest = {
  loginId: string;
  password: string;
};
export type UserResponse = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
};
export type UpdateUser = {
  firstName: string;
  lastName: string;
  username: string;
};
export type UpdateRequest = {
  firstName: string;
  lastName: string;
  username: string;
};
export type UpdatePasswordRequest = {
  oldPassword: string;
  newPassword: string;
};
export type UpdatePassword = {
  hashedPassword: string;
};
