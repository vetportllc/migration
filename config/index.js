const env = process.env.NODE_ENV || "LOCAL";
const LOCAL = {
  server: {
    environment: "LOCAL",
    PORT: process.env.PORT,
  },
  db: {
    CONNECTION_STRING: process.env.MONGO,
  },
  BASE_PATH: process.env.BASE_PATH ?? "/",
};

const STAGING = {
  server: {
    environment: "STAGING",
    PORT: process.env.PORT,
  },
  db: {
    CONNECTION_STRING: process.env.MONGO,
  },
  BASE_PATH: process.env.BASE_PATH ?? "/",
};

const DEVELOPMENT = {
  server: {
    environment: "DEVELOPMENT",
    PORT: process.env.PORT,
  },
  db: {
    CONNECTION_STRING: process.env.MONGO,
  },
  BASE_PATH: process.env.BASE_PATH ?? "/",
};

const PRODUCTION = {
  server: {
    environment: "PRODUCTION",
    PORT: process.env.PORT,
  },
  db: {
    CONNECTION_STRING: process.env.MONGO,
  },
  BASE_PATH: process.env.BASE_PATH ?? "/",
};

const TESTING = {
  server: {
    environment: "TESTING",
    PORT: process.env.PORT,
  },
  db: {
    CONNECTION_STRING: process.env.MONGO,
  },
  BASE_PATH: process.env.BASE_PATH ?? "/",
};

const config = {
  LOCAL,
  STAGING,
  PRODUCTION,
  DEVELOPMENT,
  TESTING,
};

module.exports = config[env];
