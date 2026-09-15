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
  clickedAt: Date;
  ipAddress: string;
  userAgent: string | null;
  browser: string | null;
  device: string | null;
  countryCode: string | null;
  referer: string | null;
};
