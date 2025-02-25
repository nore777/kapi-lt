import validator from 'validator';

export default function usernameValidation(username: string): boolean {
  let isUsername = true;
  if (!validator.isLength(username, { min: 4 })) isUsername = false;
  if (!validator.isLength(username, { max: 20 })) isUsername = false;
  if (!validator.isAlphanumeric(username)) isUsername = false;
  return isUsername;
}

