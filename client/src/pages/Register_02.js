import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo_02, FormRow_02 as FormRow_02 } from '../components';
import Wrapper from '../assets/wrappers/Register_02';
import { useAppContext } from '../context/appContext_02';
import Alert_02 from '../components/Alert_02';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
  showAlert: false,
};

const Register_02 = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    console.log('form', currentUser);
    if (!isMember) {
      registerUser({
        currentUser,
        endPoint: 'register_02',
        alertText: 'User created Redirecting ...',
      });
    } else {
      loginUser({
        currentUser,
        endPoint: 'login_02',
        alertText: 'Login Success Redirecting ...',
      });
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo_02 />
        <h3>{values.isMember ? 'LOGIN' : 'REGISTER'}</h3>
        {showAlert && <Alert_02 />}
        {/*name input*/}
        {!values.isMember && (
          <FormRow_02
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            className="form-input"
          />
        )}
        {/* email input */}
        <FormRow_02
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          className="form-input"
        />
        {/* password input */}
        <FormRow_02
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          className="form-input"
        />
        <button className="btn btn-block" type="submit">
          Submit
        </button>{' '}
        <p>{values.isMember ? 'Not a member yet?' : 'Already a member?'}</p>
        <button type="button" className="member-btn" onClick={toggleMember}>
          {values.isMember ? 'Register' : 'Login'}
        </button>
      </form>
    </Wrapper>
  );
};

export default Register_02;
