import md5 from "md5"
export function generate(longUrl: string, userId: string): string {
  const input = longUrl + userId;

  return md5(input);
}
