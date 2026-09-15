CREATE TYPE "public"."transaction_status" AS ENUM('pending', 'sucess', 'failed');--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"amount" integer,
	"currency_code" varchar(5),
	"status" "transaction_status",
	"reference_id" uuid,
	"timestamp" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "url_analytics" DROP CONSTRAINT "url_analytics_url_id_urls_id_fk";
--> statement-breakpoint
ALTER TABLE "urls" DROP CONSTRAINT "urls_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "url_analytics" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "url_analytics" ADD COLUMN "short_code" varchar(4);--> statement-breakpoint
ALTER TABLE "url_analytics" ADD COLUMN "clicked_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "url_analytics" ADD COLUMN "ip_address" varchar(45);--> statement-breakpoint
ALTER TABLE "url_analytics" ADD COLUMN "user_agent" varchar(1024);--> statement-breakpoint
ALTER TABLE "url_analytics" ADD COLUMN "browser" varchar(100);--> statement-breakpoint
ALTER TABLE "url_analytics" ADD COLUMN "device" varchar(100);--> statement-breakpoint
ALTER TABLE "url_analytics" ADD COLUMN "country_code" varchar(10);--> statement-breakpoint
ALTER TABLE "url_analytics" ADD COLUMN "referer" varchar(2048);--> statement-breakpoint
ALTER TABLE "urls" ADD COLUMN "short_code" varchar(4) PRIMARY KEY NOT NULL;--> statement-breakpoint
ALTER TABLE "urls" ADD COLUMN "long_url" varchar(2048) NOT NULL;--> statement-breakpoint
ALTER TABLE "urls" ADD COLUMN "created_by" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "urls" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "urls" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "first_name" varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_name" varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "username" varchar(30) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "hashed_password" varchar(128) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "url_analytics" ADD CONSTRAINT "url_analytics_short_code_urls_short_code_fk" FOREIGN KEY ("short_code") REFERENCES "public"."urls"("short_code") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "urls" ADD CONSTRAINT "urls_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "url_analytics" DROP COLUMN "url_id";--> statement-breakpoint
ALTER TABLE "url_analytics" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "urls" DROP COLUMN "id";--> statement-breakpoint
ALTER TABLE "urls" DROP COLUMN "user_id";--> statement-breakpoint
ALTER TABLE "urls" DROP COLUMN "original_url";--> statement-breakpoint
ALTER TABLE "urls" DROP COLUMN "shortcode";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");