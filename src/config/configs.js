import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT
export const MONGODB_CNX_STR = process.env.MONGODB_CNX_STR
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL 
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
export const SECRET_SESSIONS = process.env.SECRET_SESSIONS
export const CLIENT_ID_GITHUB = process.env.CLIENT_ID_GITHUB
export const CLIENT_SECRET_GITHUB = process.env.CLIENT_SECRET_GITHUB
export const JWT_KEY = process.env.JWT_KEY
export const PERCISTENCE = process.env.PERCISTENCE
export const GMAIL_USER = process.env.GMAIL_USER
export const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD
export const TWILIO_NUMBER = process.env.TWILIO_NUMBER
export const TWILIO_SID = process.env.TWILIO_SID
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN