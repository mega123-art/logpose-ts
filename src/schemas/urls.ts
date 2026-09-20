import z from "zod";
export const createUrlSchema=z.object({
    longUrl:z.string(),
    shortCode:z.string()
})