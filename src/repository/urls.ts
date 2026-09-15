import {db} from "../db/index.js";
import {urls} from "../db/schema.js"
import type { NewUrl } from "../models/urls.js";
import { eq } from "drizzle-orm";
export async function create(newUrl:NewUrl) {
    return await db.insert(urls).values(newUrl).returning();
    
}
export async function deleteUrl(shortCode:string) {
    return await db.delete(urls).where(eq(urls.shortCode,shortCode));
}
export async function modifyCode(shortCodeold:string,shortCode:string){
    return await db.update(urls).set({shortCode}).where(eq(urls.shortCode,shortCodeold))
}

export async function modilfyUrl(shortCode:string,newLongUrl:string) {
    return await db.update(urls).set({longUrl:newLongUrl}).where(eq(urls.shortCode,shortCode))
    
}