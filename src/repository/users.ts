import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { eq } from "drizzle-orm";
import type { NewUser, UpdatePassword, UpdateUser } from "../models/users.js";

export async function createUser(newUser:NewUser) {
    return await db.insert(users).values(newUser).returning()
    
}
export async function updatebyid(id:string,updateUser:UpdateUser) {
    return await db.update(users).set(updateUser).where(eq(users.id,id))
}
export async function deletebyid(id:string){
    return await db.delete(users).where(eq(users.id,id))
}
export async function updatePasswordById(id:string,updatePassword:UpdatePassword){
    return await db.update(users).set({hashedPassword:updatePassword.hashedPassword}).where(eq(users.id,id));
}