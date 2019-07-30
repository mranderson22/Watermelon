import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginPage = () => {
  const [member, setMember] = useState(true)

  const loginSwitch = () => {
    setMember(!member)
  }

  return (
    <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Watermelon</h1>
        {member ? <LoginForm /> : <SignupForm />}
        {!member && <span className="box-layout__footer" onClick={loginSwitch}>already have an account?</span>}
        {member && <span className="box-layout__footer" onClick={loginSwitch}>create an account</span>}
    </div>
  </div>
  )
}

export default LoginPage;

