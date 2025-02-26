import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onAddContact }) => {
  const contactValidation = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required')
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactValidation}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <Field name="number" type="text" />
            <ErrorMessage name="number" />
          </div>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;