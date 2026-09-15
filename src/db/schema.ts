import {pgTable,serial,text,uuid,varchar,timestamp} from "drizzle-orm/pg-core";

export const users =pgTable("users",{
    id: uuid("id").primaryKey(),
    email:varchar("email", {length:255}).notNull(),
});

export const urls =pgTable("urls",{
    id: uuid("id").primaryKey(),
    userId:uuid("user_id").notNull().references(()=>users.id),
    originalUrl : text("original_url").notNull(),
    shortcode:varchar("shortcode",{length:32}).notNull(),
})

export const urlAnalytics=pgTable("url_analytics",{
    id:uuid("id").primaryKey(),
    urlID: uuid("url_id").notNull().references(()=>urls.id),
    createdAt:timestamp("created_at").defaultNow().notNull(),

})