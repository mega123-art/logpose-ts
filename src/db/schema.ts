import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  integer,
  pgEnum,
} from 'drizzle-orm/pg-core';
export const transactionStatus = pgEnum('transaction_status', [
  'pending',
  'success',
  'failed',
]);
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  firstName: varchar('first_name', {
    length: 100,
  }).notNull(),

  lastName: varchar('last_name', {
    length: 100,
  }).notNull(),

  username: varchar('username', {
    length: 30,
  })
    .unique()
    .notNull(),

  email: varchar('email', {
    length: 100,
  })
    .unique()
    .notNull(),

  hashedPassword: varchar('hashed_password', {
    length: 128,
  }).notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),

  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const urls = pgTable('urls', {
  shortCode: varchar('short_code', {
    length: 4,
  }).primaryKey(),

  longUrl: varchar('long_url', {
    length: 2048,
  }).notNull(),

  createdBy: uuid('created_by')
    .notNull()
    .references(() => users.id),

  createdAt: timestamp('created_at').defaultNow().notNull(),

  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const urlAnalytics = pgTable('url_analytics', {
  id: uuid('id').primaryKey().defaultRandom(),

  shortCode: varchar('short_code', {
    length: 4,
  })
    .references(() => urls.shortCode)
    .notNull(),

  clickedAt: timestamp('clicked_at').defaultNow().notNull(),

  ipAddress: varchar('ip_address', {
    length: 45,
  }).notNull(),

  userAgent: varchar('user_agent', {
    length: 1024,
  }),

  browser: varchar('browser', {
    length: 100,
  }),

  device: varchar('device', {
    length: 100,
  }),

  countryCode: varchar('country_code', {
    length: 10,
  }),

  referer: varchar('referer', {
    length: 2048,
  }),
});

export const transactions = pgTable('transactions', {
  id: uuid('id').primaryKey().defaultRandom(),

  userId: uuid('user_id')
    .notNull()
    .references(() => users.id),

  amount: integer('amount').notNull(),

  currencyCode: varchar('currency_code', {
    length: 5,
  }).notNull(),

  status: transactionStatus('status').notNull(),

  referenceId: uuid('reference_id'),

  timestamp: timestamp('timestamp').defaultNow().notNull(),
});
