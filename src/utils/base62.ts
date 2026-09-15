import { BinaryFF1 } from "@noble/ciphers/ff1.js";

const CHARSET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const key = new Uint8Array(32);
const ff1 = BinaryFF1(key);

function bigIntToBase62(value: bigint): string {
  if (value === 0n) {
    return "0";
  }

  let result = "";

  while (value > 0n) {
    const remainder = value % 62n;
    result = CHARSET[Number(remainder)] + result;
    value = value / 62n;
  }

  return result;
}

function base62ToBigInt(value: string): bigint {
  let result = 0n;

  for (const char of value) {
    const index = CHARSET.indexOf(char);

    if (index === -1) {
      throw new Error(`Invalid Base62 character: ${char}`);
    }

    result = result * 62n + BigInt(index);
  }

  return result;
}

export function encode(databaseId: bigint): string {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);

  view.setBigUint64(0, databaseId, true);

  const bytes = new Uint8Array(buffer);

  const encrypted = ff1.encrypt(bytes);

  const encryptedView = new DataView(
    encrypted.buffer,
    encrypted.byteOffset,
    encrypted.byteLength
  );

  const encryptedNumber = encryptedView.getBigUint64(0, true);

  return bigIntToBase62(encryptedNumber);
}

export function decode(shortCode: string): bigint {
  const encryptedNumber = base62ToBigInt(shortCode);

  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);

  view.setBigUint64(0, encryptedNumber, true);

  const encryptedBytes = new Uint8Array(buffer);

  const decrypted = ff1.decrypt(encryptedBytes);

  const decryptedView = new DataView(
    decrypted.buffer,
    decrypted.byteOffset,
    decrypted.byteLength
  );

  return decryptedView.getBigUint64(0, true);
}
const id = 123n;

const shortCode = encode(id);
const decodedId = decode(shortCode);
