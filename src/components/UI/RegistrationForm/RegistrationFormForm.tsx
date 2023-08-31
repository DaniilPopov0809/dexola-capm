import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FieldProps,
} from "formik";
import PhoneInput from "react-phone-number-input";
import MainButton from "../MainButton/MainButton";
import FieldInput from "../FieldInput/FieldInput";
import ShowPasswordButton from "../ShowPasswordButton/ShowPasswordButton";
import { InitialValue } from "../../../types";
import validationRegitrationForm from "../../../helpers/validationRegistrationForm";
import styles from "./RegistrationForm.module.scss";
import "./PhoneInput.scss";

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
            {({ field, meta, form }: FieldProps) => (
              <FieldInput
                field={field}
                meta={meta}
                form={form}
                placeholder="Enter email"
                type="email"
                name={"email"}
                aria-label="Email"
              />
            )}
          </Field>

          <div className={styles.field__container}>
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
                  limitMaxLength={true}
                  autoComplete="off" 
                  international
                  placeholder="+38(0__) ___ __ __"
                  value={field.value}
                  aria-label="Phone"
                  withCountryCallingCode={false}
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
              className={styles.field__error}
              name="phone"
              component="div"
            />
          </div>

          <Field name="password">
            {({ field, meta, form }: FieldProps) => (
              <FieldInput
                field={field}
                meta={meta}
                form={form}
                placeholder="Password"
                type={isOpenEyePass ? "text" : "password"}
                name="password"
                aria-label="Password"
              >
                <ShowPasswordButton
                  type="button"
                  aria-label="Show password"
                  isOpen={isOpenEyePass}
                  setIsOpen={setIsOpenEyePass}
                />
              </FieldInput>
            )}
          </Field>

          <Field name="confirmPassword">
            {({ field, meta, form }: FieldProps) => (
              <FieldInput
                field={field}
                meta={meta}
                form={form}
                placeholder="Confirm password"
                type={isOpenEyeConfPass ? "text" : "password"}
                name="confirmPassword"
                aria-label="Confirm password"
              >
                <ShowPasswordButton
                  type="button"
                  aria-label="Show password"
                  isOpen={isOpenEyeConfPass}
                  setIsOpen={setIsOpenEyeConfPass}
                />
              </FieldInput>
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
