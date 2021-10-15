export const API_URL = process.env.NODE_ENV === "production" ?
  "http://localhost:8000/api/" : process.env.API_URL
export const IMAGE_URL = process.env.NODE_ENV === "production" ?
  "http://localhost:8000/images/" : process.env.IMAGE_URL
  