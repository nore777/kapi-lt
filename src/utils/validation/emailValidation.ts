import validator from 'validator';

export default function emailValidation(email: string): boolean {
  if (!validator.isEmail(email)) return false;
  return true;
}