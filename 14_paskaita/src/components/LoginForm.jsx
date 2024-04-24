import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikField from "./FormikField";
//pasgr parametrai initialValues
const loginInitialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {};
  return (
    <div>
      <h1>LoginForm</h1>

      <br />
      <Formik
        initialValues={loginInitialValues}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Laukas negali buti tuscias";
          }
          return errors;
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <FormikField
              name="password"
              type="password"
              placeholder="password"
            />
            <p style={{ color: "green" }}>
              Account will be created with:{values.email} email
            </p>
            <Field name="email" type="email"></Field>
            <ErrorMessage
              style={{ color: "red" }}
              name="email"
              component="div"
            />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
