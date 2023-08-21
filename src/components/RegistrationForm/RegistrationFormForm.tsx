import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
// import PhoneInput from 'react-phone-input-2';
import { InitialValue } from "../../types";
import LinkButton from "../LinkButton/LinkButton";
import validationRegitrationForm from "../../helpers/validationRegistrationForm";

import styles from "./RegistrationForm.module.scss";
import "react-phone-input-2/lib/style.css";

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
}

const RegistrationForm = () => {
  const [isOpenEyePass, setIsOpenEyePass] = useState(false);
  const [isOpenEyeConfPass, setIsOpenEyeConfPass] = useState(false);

  const initialValue: InitialValue = {
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
        initialValues={initialValue}
        validationSchema={validationRegitrationForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form} autoComplete="off">
            <Field name="email">
              {({ field, meta }: FieldProps) => (
                <div className={styles.form__container}>
                  <input
                    className={`${styles.form__input} ${
                      meta.touched && meta.error ? styles.error : ""
                    }`}
                    type="email"
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
              {/* <Field name="phone">
            {({ field, meta }) => (
              <PhoneInput
                {...field}
                containerStyle={{
                  width: "100%",
                  marginBottom: "16px",
                }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                  height: "40px",
                }}
                country={"ua"}
              />
            )}
          </Field> */}
              <Field className={styles.form__input} type="tel" name="phone" />
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
                    className={`${styles.form__input} ${
                      meta.touched && meta.error ? styles.error : ""
                    }`}
                    type={isOpenEyePass ? "text" : "password"}
                    placeholder="Password"
                    {...field}
                  />
                  <button
                    type="button"
                    className={`${styles.form__toggle} ${
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
                    className={`${styles.form__input} ${
                      meta.touched && meta.error ? styles.error : ""
                    }`}
                    type={isOpenEyeConfPass ? "text" : "password"}
                    placeholder="Confirm password"
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
            <LinkButton
              title={"Send it"}
              type="submit"
              disabled={isSubmitting}
              className={"button"}
            />
          </Form>
        )}
      </Formik>
  );
};

export default RegistrationForm;
