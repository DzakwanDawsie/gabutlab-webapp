export const Config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || '',
  COOKIE_HTTPONLY: String(process.env.NEXT_PUBLIC_COOKIE_HTTPONLY || process.env.COOKIE_HTTPONLY || 'false') == 'true',
  COOKIE_SECURE: String(process.env.NEXT_PUBLIC_COOKIE_SECURE || process.env.COOKIE_SECURE || 'false') == 'true',
  COOKIE_LIMIT: Number(process.env.NEXT_PUBLIC_COOKIE_LIMIT || process.env.COOKIE_LIMIT || 86400),
}