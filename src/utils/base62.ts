import { FF1 } from "@noble/ciphers/ff1.js";
import { getEncryptionKey } from "../config/env.js";
import base62 from "base62";

const RADIX=3813
const LENGTH=2
const LOWER_BOUND = 238_328;
const UPPER_BOUND = 14_776_335;
const RANGE_SIZE=UPPER_BOUND-LOWER_BOUND+1;


function obfuscate(number: number): number {
  const key = getEncryptionKey();
  const ff1 = FF1(RADIX, key);

  const digits = integerToDigits(number, LENGTH);
  const encryptedDigits = ff1.encrypt(digits);
  const encryptedNumber=digitsToInteger(encryptedDigits)
  if (encryptedNumber<UPPER_BOUND && encryptedNumber>LOWER_BOUND){
    return encryptedNumber
  }
  number=encryptedNumber
  return obfuscate(number)
  
  
}

function deobfuscate(number:number):number{
  const key=getEncryptionKey();
  const ff1=FF1(RADIX,key)
  const digits=integerToDigits(number,LENGTH)
  const decryptedDigits=ff1.decrypt(digits)
  const decryptedNumber=digitsToInteger(decryptedDigits)
  if(decryptedNumber<RANGE_SIZE && decryptedNumber>0){
    return decryptedNumber
  }
  number=decryptedNumber
  return deobfuscate(decryptedNumber)


}
function integerToDigits(value: number, length: number): number[] {
  let digits:number[] = [];

  for (let index = length - 1; index >= 0; index--) {
    digits[index] = value % RADIX;
    value = Math.floor(value / RADIX);
  }

  return digits;
}

function digitsToInteger(digits:number[]):number{
  let value=0;
  let digit:number=0;
  for (let index = 0; index < digits.length; index++) {
    digit=digits[index]!
    value=value*RADIX+digit

    
  }
  return value
}

function encode(db_id:number):string {
  let obs_id=obfuscate(db_id)
  let encrypted=base62.encode(obs_id)
  return encrypted
  
  
}
function decode(shortCode:string):number{
  let value=base62.decode(shortCode)
  let decrypted=deobfuscate(value)
  return decrypted
}
const original = 7912;

const shortCode = encode(original);
const result = decode(shortCode);

console.log("original:", original);
console.log("short code:", shortCode);
console.log("decoded:", result);