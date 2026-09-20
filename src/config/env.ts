import "dotenv/config";

export function getEncryptionKey(): Uint8Array {
  const key = process.env.FF1_ENCRYPTION_KEY;

  if (!key) {
    throw new Error("FF1_ENCRYPTION_KEY is not set");
  }

  if (!/^[0-9a-fA-F]+$/.test(key)) {
    throw new Error("FF1_ENCRYPTION_KEY must contain only hexadecimal characters");
  }

  const bytes = new Uint8Array(
    key.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16))
  );

  if (bytes.length !== 32) {
    throw new Error("FF1_ENCRYPTION_KEY must be exactly 32 bytes");
  }

  return bytes;
}