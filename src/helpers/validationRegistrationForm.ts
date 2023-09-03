import * as Yup from "yup";
import { InitialValue } from "../types";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

const validationRegitrationForm: Yup.Schema<InitialValue> = Yup.object({
  email: Yup.string()
    .email("Is not valid email")
    .required("Please enter email"),
  phone: Yup.string()
    .required("Please enter phone")
    .test("phone", "Invalid phone number", (value) => {
      try {
        const phoneNumber = phoneUtil.parse(value, undefined);
        return phoneUtil.isValidNumber(phoneNumber);
      } catch (error) {
        return false;
      }
    }),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password requires: only english, uppercase, lowercase, digit, special character."
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default validationRegitrationForm;

