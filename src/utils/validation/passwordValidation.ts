import validator from 'validator';

export default function passwordValidation(password: string): boolean {
  let isPassword = true
  if (!validator.isStrongPassword(password, { minLength: 8, minSymbols: 0 })) isPassword = false
  return isPassword;
}