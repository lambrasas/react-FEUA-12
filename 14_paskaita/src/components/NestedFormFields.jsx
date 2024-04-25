import { useField, useFormikContext } from "formik";
import FormikField from "./FormikField";

const NestedFormFields = () => {
  const [field, meta, helpers] = useField("address");

  const { values, isSubmitting } = useFormikContext();
  console.log(values);

  const address = field.value;
  return (
    <>
      <p>{address.street}</p>
      <FormikField name="name" />
      <FormikField name="address.street" />
    </>
  );
};

export default NestedFormFields;
