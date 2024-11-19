// utils/validateUserForm.js
import validator from "validator";

export const validateUserForm = (formData) => {
  const errors = {};

  if (validator.isEmpty(formData.name)) errors.name = "*Name is required";
  if (validator.isEmpty(formData.username))
    errors.username = "*Username is required";
  if (!validator.isEmail(formData.email))
    errors.email = "*A valid email is required";
  if (validator.isEmpty(formData.company.name))
    errors["company.name"] = "*Department is required";

  return errors;
};
