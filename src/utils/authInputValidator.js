export const isValidEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(emailRegex);
};

const authInputValidator = (inputValue, isRegister) => {
  const errors = {};

  if (isRegister) {
    if (!inputValue.name.trim()) {
      errors.name = "Username is required";
    }
  }

  if (!inputValue.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(inputValue.email)) {
    errors.email = "Invalid email format";
  }

  if (!inputValue.password.trim()) {
    errors.password = "Password is required";
  } else if (inputValue.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

export default authInputValidator;
