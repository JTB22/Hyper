// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const common = {
  client: "sqlite3",
  migrations: {
    directory: "./src/data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
  useNullAsDefault: true,
};
const config = {
  development: {
    ...common,
    connection: {
      filename: "./src/data/dev.sqlite3",
    },
  },

  production: {
    ...common,
    connection: {
      filename: "./src/data/prod.sqlite3",
    },
  },
};
export default config;
