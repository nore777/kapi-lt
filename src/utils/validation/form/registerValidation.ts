import usernameValidation from "../usernameValidation"
import emailValidation from "../emailValidation"
import passwordValidation from "../passwordValidation"
import connect from "@/lib/dbConnect"
import User from "@/models/userModel"

async function registerFormValidation(
  username: string, email: string, password: string, repeatPassword: string, TOSPP: boolean): Promise<boolean | string> {

  if (!username || !email || !password || !repeatPassword) {
    return "registerEmptyFields"
  }

  // terms of service and privacy policy
  if (TOSPP !== true) {
    return "registerEmptyTOSPP"
  }

  const isUsername = usernameValidation(username)
  if (!isUsername) {
    return "registerInvalidUsername"
  }

  const isEmail = emailValidation(email)
  if (!isEmail) {
    return "registerInvalidEmail"
  }

  const isPassword = passwordValidation(password)
  if (!isPassword) {
    return "registerInvalidPassword"
  }

  if (password !== repeatPassword) {
    return "registerPasswordMatch"
  }

  try {
    await connect()

    const usernameExists = await User.findOne({ username })
    if (usernameExists) {
      return "registerUsernameExists"
    }

    const emailExists = await User.findOne({ email })
    if (emailExists) {
      return "registerEmailExists"
    }
  } catch (error) {
    console.log(error)
    return "error"
  }

  return true;
}

export default registerFormValidation
