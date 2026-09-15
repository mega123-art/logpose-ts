export type NewUser = {
  firstName: string;
  lastName: string;
  username: string;
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
