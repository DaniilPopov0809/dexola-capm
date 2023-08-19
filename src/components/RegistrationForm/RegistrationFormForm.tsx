import {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./RegistrationForm.module.scss";


interface InitialValue {
  email: string;
  phone: number | string;
  password: string;
  confirmPassword: string;
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

  const handleSubmit = (values: InitialValue) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <div className={styles.form__container}>
          <Field className={styles.form__input} type="email" name="email" placeholder ="Enter email"/>
          <ErrorMessage className={styles.form__error} name="email" component="div" />
        </div>
        <div className={styles.form__container}>
          <Field className={styles.form__input} type="tel" name="phone" />
          <ErrorMessage className={styles.form__error} name="phone" component="div"/>
        </div>
        <div className={`${styles.form__container} ${styles.password}`}>
          <Field className={styles.form__input} type="password" name="password" placeholder ="Password"/>
          <button type="button"  className={`${styles.form__toggle} ${isOpenEyePass ? styles.open : ""}`}
          onClick={() => setIsOpenEyePass(!isOpenEyePass)}>

          </button>
          <ErrorMessage
            className={styles.form__error}
            name="password"
            component="div"
          />
        </div>
        <div className={`${styles.form__container} ${styles.password}`}>
          <Field
            className={styles.form__input}
            type="password"
            name="confirmPassword"
            placeholder ="Confirm password"
          />
            <button type="button"  className={`${styles.form__toggle} ${isOpenEyeConfPass ? styles.open : ""}`}
          onClick={() => setIsOpenEyeConfPass(!isOpenEyeConfPass)}>

          </button>
          <ErrorMessage
            className={styles.form__error}
            name="confirmPassword"
            component="div"
          />
        </div>
        <button type="submit">Send It</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
