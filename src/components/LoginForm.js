import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase/app';

const FormLayout = ({
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <Form className="contactForm">
      <div className="inputField">
        { touched.email && errors.email && <p className="formError formError-first">{errors.email}</p> }
        <Field type="email" name="email" placeholder="Your Email" autoComplete="sdfsessdf" className="inputField__input inputField__input-first" />
      </div>
      <div className="inputField">
        { touched.password && errors.password && <p className="formError">{errors.password}</p> }
        <Field type="password" name="password" placeholder="Your Password" autoComplete="asdfsdfd" />
      </div>
      <button className="btn" disabled={isSubmitting} type="submit">Submit</button>
    </Form>
  )
}

const LoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: '',
      password: ''
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email()
    .required('Your Email is required!'),
    password: Yup.string()
    .min(8)
    .max(16)
    .required(),
  }),

  handleSubmit(values, { resetForm, setSubmitting }) {
      console.log(values)
      firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
      resetForm()
      setSubmitting(true)
      setTimeout(() => {
        setSubmitting(false)
      }, 3000)
  }
})(FormLayout)

export {LoginForm as default}