/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'urls'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "urls" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "urls" ALTER COLUMN "short_code" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "urls" ADD COLUMN "database_id" integer PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY (sequence name "urls_database_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1);