import { db } from "../db/index.js";
import type { NewEntry } from "../models/urls.js";
import { eq } from "drizzle-orm";
import { urlAnalytics } from "../db/schema.js";
export async function createNewEntry(newEntry:NewEntry) {
    return await db.insert(urlAnalytics).values(newEntry).returning()
    
}
export async function deleteEntry(id:string) {
    return await db.delete(urlAnalytics).where(eq(urlAnalytics.id,id))
    
}