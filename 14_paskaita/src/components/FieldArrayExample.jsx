import { Formik, Form, Field, FieldArray } from "formik";
import FormikField from "./FormikField";

const FieldArrayExample = () => {
  const friends = ["jared", "ian", "brent"];
  return (
    <div>
      <h1>Friend List</h1>
      <Formik
        initialValues={{ friends: ["jared", "ian", "brent"] }}
        onSubmit={(values) =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500)
        }
      >
        {({ values }) => (
          <Form>
            <FieldArray
              name="friends"
              render={(arrayHelpers) => (
                <div>
                  {values.friends && values.friends.length > 0 ? (
                    values.friends.map((friend, index) => (
                      <div key={index}>
                        {/* <span>{friend}</span> */}
                        <Field name={`friends.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} //
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")} //
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      Add a friend
                    </button>
                  )}
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      </Formik>

      <br />
      <br />
      <h2>Shopping lists</h2>
      <Formik
        initialValues={{ name: "", price: 0, list: ["Miegmaisis"] }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <FormikField name="name" placeholder="Name" />
            <FormikField name="price" placeholder="Price" type="number" />
            <FieldArray
              name="list"
              render={(arrayHelpers) => (
                <div>
                  <ol>
                    {values.list.map((_listItem, index) => (
                      <li key={index} style={{ marginBottom: 10 }}>
                        <Field name={`list.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Istrinti
                        </button>
                      </li>
                    ))}
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      Prideti nauja daika
                    </button>
                  </ol>
                </div>
              )}
            />
            <button type="submit">Prideti nauja sarasa</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FieldArrayExample;
