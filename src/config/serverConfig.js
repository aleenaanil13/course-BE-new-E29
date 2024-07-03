import dotenv from "dotenv";

dotenv.config();

export default {
  Port: process.env.PORT || 3000,
  db: process.env.DB_URL || "",
  token: process.env.TOKEN_SECRET || "",
};
