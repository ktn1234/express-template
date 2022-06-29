import "dotenv/config";

export default {
  NODE_ENV: process.env.NODE_ENV as string,
  PORT: process.env.PORT as string,
  CORS_ORIGIN: process.env.CORS_ORIGIN as string,
};
