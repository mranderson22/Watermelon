import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { startSignup } from '../actions/auth';

const FormLayout = ({
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <Form className="contactForm">
      <p>Join Us!</p>
      <div className="inputField">
        { touched.first && errors.first && <p className="formError formError-first">{errors.first}</p> }
        <Field type="text" name="first" placeholder="First Name" autoComplete="sdfsessdf" className="inputField__input inputField__input-first" />
      </div>
      <div className="inputField">
        { touched.last && errors.last && <p className="formError formError-first">{errors.last}</p> }
        <Field type="text" name="last" placeholder="Last Name" autoComplete="sdfsessdf" className="inputField__input inputField__input-first" />
      </div>
      <div className="inputField">
        { touched.email && errors.email && <p className="formError formError-first">{errors.email}</p> }
        <Field type="email" name="email" placeholder="Your Email" autoComplete="sdfsessdf" className="inputField__input inputField__input-first" />
      </div>
      <div className="inputField">
        { touched.password && errors.password && <p className="formError">{errors.password}</p> }
        <Field type="password" name="password" placeholder="Your Password" autoComplete="asdfsdfd" />
      </div>
      <button className="btn" disabled={isSubmitting} type="submit">Create Account</button>
    </Form>
  )
}

const SignupForm = withFormik({
  mapPropsToValues() {
    return {
      first: '',
      last:'',
      email: '',
      password: ''
    }
  },

  validationSchema: Yup.object().shape({
    first: Yup.string(),
    last: Yup.string(),
    email: Yup.string().email()
    .required('Your Email is required!'),
    password: Yup.string()
    .min(8)
    .max(16)
    .required(),
  }),

  handleSubmit(values, { props, resetForm, setSubmitting }) {
      props.startSignup(values)
      resetForm()
      setSubmitting(true)
      setTimeout(() => {
        setSubmitting(false)
      }, 3000)
  }
})(FormLayout)

const mapDispatchToProps = (dispatch) => ({
  startSignup: (values) => dispatch(startSignup(values))
})

export default connect(undefined, mapDispatchToProps)(SignupForm);