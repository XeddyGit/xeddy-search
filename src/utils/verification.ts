import { generateRandomCode } from "./helpers";

// In-memory store for codes (replace with Redis/DB in production)
const verificationCodes = new Map<string, { code: string; expires: Date }>();

export function storeVerificationCode(phone: string): string {
  const code = generateRandomCode(6); // Generate 6-digit code
  verificationCodes.set(phone, {
    code,
    expires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes expiry
  });
  return code;
}

export function verifyCode(phone: string, code: string): boolean {
  const storedData = verificationCodes.get(phone);
  if (!storedData) return false;
  
  const isValid = storedData.code === code && storedData.expires > new Date();
  if (isValid) {
    verificationCodes.delete(phone); // Clean up after successful verification
  }
  return isValid;
}