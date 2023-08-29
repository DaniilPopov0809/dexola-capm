import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikProps,
} from "formik";
import PhoneInput from "react-phone-number-input";
import { InitialValue } from "../../../types";
import MainButton from "../MainButton/MainButton";
import validationRegitrationForm from "../../../helpers/validationRegistrationForm";
import styles from "./RegistrationForm.module.scss";
import "./PhoneInput.scss";

interface FieldProps {
  field: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  meta: {
    touched: boolean;
    error?: string;
  };
  form: FormikProps<InitialValue>;
}

const RegistrationForm = () => {
  const [isOpenEyePass, setIsOpenEyePass] = useState(false);
  const [isOpenEyeConfPass, setIsOpenEyeConfPass] = useState(false);

  const initialValues: InitialValue = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (
    values: InitialValue,
    { resetForm, setSubmitting }: FormikHelpers<InitialValue>
  ): Promise<void> => {
    const sendData: InitialValue = {
      email: values.email,
      phone: values.phone,
      password: values.password,
    };

    setSubmitting(true);

    //test async operation
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(sendData);
        resolve();
      }, 2000);
    });

    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationRegitrationForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form} autoComplete="off">
          <Field name="email">
            {({ field, meta }: FieldProps) => (
              <div className={styles.form__container}>
                <input
                  className={`mainFontSize ${styles.form__input} ${
                    meta.touched && meta.error
                      ? styles.error
                      : meta.touched
                      ? styles.success
                      : ""
                  }`}
                  type="email"
                  aria-label="Email"
                  required
                  {...field}
                  placeholder="Enter email"
                />
                <ErrorMessage
                  className={styles.form__error}
                  name="email"
                  component="div"
                />
              </div>
            )}
          </Field>

          <div className={styles.form__container}>
            <Field name="phone">
              {({ field, meta, form }: FieldProps) => (
                <PhoneInput
                  {...field}
                  className={`${
                    meta.touched && meta.error
                      ? "error"
                      : meta.touched
                      ? "success"
                      : ""
                  }`}
                  international
                  defaultCountry="UA"
                  countryCallingCodeEditable={false}
                  placeholder="+38(0__) ___ __ __"
                  value={field.value}
                  // maxLength={13}
                  onChange={(value) => {
                    form.setFieldValue("phone", value);
                  }}
                  onBlur={() => {
                    form.setFieldTouched("phone", true);
                  }}
                />
              )}
            </Field>
            <ErrorMessage
              className={styles.form__error}
              name="phone"
              component="div"
            />
          </div>

          <Field name="password">
            {({ field, meta }: FieldProps) => (
              <div className={styles.form__container}>
                <input
                  className={`mainFontSize  ${styles.form__input} ${
                    meta.touched && meta.error
                      ? styles.error
                      : meta.touched
                      ? styles.success
                      : ""
                  }`}
                  type={isOpenEyePass ? "text" : "password"}
                  placeholder="Password"
                  aria-label="Password"
                  required
                  {...field}
                />
                <button
                  type="button"
                  className={`mainFontSize ${styles.form__toggle} ${
                    isOpenEyePass ? styles.open : ""
                  }`}
                  onClick={() => setIsOpenEyePass(!isOpenEyePass)}
                ></button>
                <ErrorMessage
                  className={styles.form__error}
                  name="password"
                  component="div"
                />
              </div>
            )}
          </Field>
          <Field name="confirmPassword">
            {({ field, meta }: FieldProps) => (
              <div className={styles.form__container}>
                <input
                  className={`mainFontSize ${styles.form__input} ${
                    meta.touched && meta.error
                      ? styles.error
                      : meta.touched
                      ? styles.success
                      : ""
                  }`}
                  type={isOpenEyeConfPass ? "text" : "password"}
                  placeholder="Confirm password"
                  aria-label="Confirm password"
                  required
                  {...field}
                />
                <button
                  type="button"
                  className={`${styles.form__toggle} ${
                    isOpenEyeConfPass ? styles.open : ""
                  }`}
                  onClick={() => setIsOpenEyeConfPass(!isOpenEyeConfPass)}
                ></button>

                <ErrorMessage
                  className={styles.form__error}
                  name="confirmPassword"
                  component="div"
                />
              </div>
            )}
          </Field>
          <div className={styles.form__buttonWrap}>
            <MainButton
              title={"Send it"}
              type="submit"
              disabled={isSubmitting}
              globalClassName={"linkButton"}
              localClassName={"form__button"}
              additionalClassName={"form__buttonTextWrap"}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
