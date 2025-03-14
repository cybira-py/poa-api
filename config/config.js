import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    schema: process.env.SCHEMA,
    pool: {
      max: parseInt(process.env.MAX_CONNECTIONS) || 10,
      min: 0,
      acquire: parseInt(process.env.CONNECTION_TIMEOUT_MILLIS) || 30000,
      idle: parseInt(process.env.IDLE_TIMEOUT_MILLIS) || 10000
    }
  }
};
