import mysql, { type Pool } from "mysql2/promise";

const globalForDatabase = globalThis as typeof globalThis & {
  embaDatabasePool?: Pool;
};

function requiredEnvironmentVariable(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required database environment variable: ${name}`);
  }
  return value;
}

export function getDatabasePool(): Pool {
  if (!globalForDatabase.embaDatabasePool) {
    globalForDatabase.embaDatabasePool = mysql.createPool({
      host: process.env.DB_HOST?.trim() || "localhost",
      port: Number(process.env.DB_PORT || 3306),
      database: requiredEnvironmentVariable("DB_NAME"),
      user: requiredEnvironmentVariable("DB_USER"),
      password: requiredEnvironmentVariable("DB_PASSWORD"),
      charset: "utf8mb4",
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    });
  }

  return globalForDatabase.embaDatabasePool;
}

let leadsSchemaPromise: Promise<void> | undefined;

async function createLeadsTable(): Promise<void> {
  await getDatabasePool().query(`
    CREATE TABLE IF NOT EXISTS leads (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(320) NULL,
      phone VARCHAR(64) NOT NULL,
      company VARCHAR(255) NULL,
      participant_type VARCHAR(100) NULL,
      programme_interest VARCHAR(255) NULL,
      page_path VARCHAR(2048) NULL,
      referrer TEXT NULL,
      utm_source VARCHAR(255) NULL,
      utm_medium VARCHAR(255) NULL,
      utm_campaign VARCHAR(255) NULL,
      utm_term VARCHAR(255) NULL,
      utm_content VARCHAR(255) NULL,
      source VARCHAR(100) NOT NULL DEFAULT 'emba-hub',
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY leads_created_at_index (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
}

export async function ensureLeadsTable(): Promise<void> {
  if (!leadsSchemaPromise) {
    leadsSchemaPromise = createLeadsTable();
  }

  try {
    await leadsSchemaPromise;
  } catch (error) {
    leadsSchemaPromise = undefined;
    throw error;
  }
}
