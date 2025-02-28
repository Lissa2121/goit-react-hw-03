import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = ({ onAddContact }) => {
  const contactValidation = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Fill in the field'),
    number: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('Fill in the field')
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
          <div className={css.form}>
            <label className={css.label} htmlFor="name">Name</label>
            <Field className={css.field} name="name" type="text" />
            <ErrorMessage name="name" />
          </div>
          <div className={css.form}>
            <label className={css.label} htmlFor="number">Number</label>
            <Field className={css.field} name="number" type="text" />
            <ErrorMessage name="number" />
          </div>
          <button className={css.button} type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;