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
      maxIdle: 5,
      idleTimeout: 60_000,
      queueLimit: 10,
      connectTimeout: 10_000,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
  }

  return globalForDatabase.embaDatabasePool;
}
