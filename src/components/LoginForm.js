import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const FormLayout = ({
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <Form className="contactForm">
      <p>Log in</p>
      <div className="inputField">
        { touched.email && errors.email && <p className="formError formError-first">{errors.email}</p> }
        <Field type="email" name="email" placeholder="Your Email" autoComplete="sdfsessdf" className="inputField__input inputField__input-first" />
      </div>
      <div className="inputField">
        { touched.password && errors.password && <p className="formError">{errors.password}</p> }
        <Field type="password" name="password" placeholder="Your Password" autoComplete="asdfsdfd" />
      </div>
      <button className="btn" disabled={isSubmitting} type="submit">Go</button>
    </Form>
  )
}

const LoginForm = withFormik({
  mapPropsToValues() {
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

  handleSubmit(values, { props, resetForm, setSubmitting }) {
      props.startLogin(values)
      resetForm()
      setSubmitting(true)
      setTimeout(() => {
        setSubmitting(false)
      }, 3000)
  }
})(FormLayout)

const mapDispatchToProps = (dispatch) => ({
  startLogin: (values) => dispatch(startLogin(values))
})

export default connect(undefined, mapDispatchToProps)(LoginForm);