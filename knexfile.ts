import dotenv from "dotenv-safe";
import Knex from "knex";

dotenv.config();

interface ConfigProps {
  [key: string]: Knex.Config;
}

const config: ConfigProps = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db.sqlite3",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = config;
