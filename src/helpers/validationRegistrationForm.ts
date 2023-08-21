import * as Yup from "yup";
import { InitialValue } from "../types";

const validationRegitrationForm: Yup.Schema<InitialValue> = Yup.object({
  email: Yup.string().email("Is not valid email").required("Please enter email"),
  phone:  Yup.string().required("Please enter phone"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default validationRegitrationForm;
