ALTER TABLE "transactions" ALTER COLUMN "status" SET DATA TYPE text;--> statement-breakpoint
DROP TYPE "public"."transaction_status";--> statement-breakpoint
CREATE TYPE "public"."transaction_status" AS ENUM('pending', 'success', 'failed');--> statement-breakpoint
ALTER TABLE "transactions" ALTER COLUMN "status" SET DATA TYPE "public"."transaction_status" USING "status"::"public"."transaction_status";--> statement-breakpoint
ALTER TABLE "transactions" ALTER COLUMN "amount" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "transactions" ALTER COLUMN "currency_code" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "transactions" ALTER COLUMN "status" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "transactions" ALTER COLUMN "timestamp" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "url_analytics" ALTER COLUMN "short_code" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "url_analytics" ALTER COLUMN "clicked_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "url_analytics" ALTER COLUMN "ip_address" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "urls" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "urls" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" SET NOT NULL;