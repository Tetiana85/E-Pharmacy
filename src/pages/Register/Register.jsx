import { Formik } from 'formik';
import {
  Error,
  FonDiv,
  LogFieldDiv,
  LoginForm,
  RegisterButton,
  RegisterButtonDiv,
  RegisterContainer,
  RegisterField,
  RegisterFieldDiv,
  RegisterForm,
  RegisterImg,
  RegisterText,
  RegisterTextSpan,
} from './Register.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn, registration } from '../../redux/operation';
import photo from '../../img/white round pill.png';
import phon from '../../img/elements.png';

import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'The Name must contain at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'The email must be in the format: example@example.com'
    )
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^[+]?[0-9]{10,15}$/,
      'The phone number must be in the format: +1234567890'
    )
    .min(10, 'The phone number must contain at least 10 digits'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'The password must contain at least 6 characters'),
});

const validationLogSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'The email must be in the format: example@example.com'
    )
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'The password must contain at least 6 characters'),
});

const Register = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const res = await dispatch(registration(values));
    if (res.error?.message === 'Rejected') {
      toast(res.payload.message);
    } else {
      const loginRes = await dispatch(
        logIn({ email: values.email, password: values.password })
      );
      if (loginRes.error?.message === 'Rejected') {
        toast(loginRes.payload.message);
      } else {
        localStorage.setItem('e-pharmacy', JSON.stringify(loginRes.payload));
        navigate('/medicine');
      }
    }
  };

  const handleLogSubmit = async (values) => {
    const res = await dispatch(logIn(values));

    if (res.error?.message === 'Rejected') {
      toast(res.payload.message);
    } else {
      localStorage.setItem('e-pharmacy', JSON.stringify(res.payload));
      navigate('/medicine');
    }
  };

  const toLogin = () => {
    navigate('/login');
  };

  const toRegistration = () => {
    navigate('/register');
  };

  return (
    <RegisterContainer>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <RegisterText>
        <h3>
          Your medication, delivered Say goodbye to all
          <RegisterTextSpan> your healthcare</RegisterTextSpan> worries with us
        </h3>
        <RegisterImg src={photo} alt="Pills"></RegisterImg>
      </RegisterText>
      {location.pathname === '/register' && (
        <Formik
          initialValues={{ name: '', email: '', phone: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <RegisterForm>
              <RegisterFieldDiv>
                <div className="inputBox">
                  <RegisterField
                    type="text"
                    name="name"
                    placeholder="User Name"
                  />
                  <Error name="name" component="div" />
                </div>
                <div className="inputBox">
                  <RegisterField
                    type="text"
                    name="email"
                    placeholder="Email address"
                  />
                  <Error name="email" component="div" />
                </div>
                <div className="inputBox">
                  <RegisterField
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                  />
                  <Error name="phone" component="div" />
                </div>
                <div className="inputBox">
                  <RegisterField
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <Error name="password" component="div" />
                </div>
              </RegisterFieldDiv>
              <RegisterButtonDiv>
                <RegisterButton
                  type="submit"
                  className="RegistrButton"
                  disabled={isSubmitting}
                >
                  Register
                </RegisterButton>
                <p onClick={toLogin} style={{ cursor: 'pointer' }}>
                  Already have an account?
                </p>
              </RegisterButtonDiv>
            </RegisterForm>
          )}
        </Formik>
      )}
      {location.pathname === '/login' && (
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationLogSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleLogSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <LoginForm>
              <LogFieldDiv>
                <div>
                  <RegisterField
                    type="text"
                    name="email"
                    placeholder="Email address"
                    className="loginInput"
                  />
                  <Error name="email" component="div" />
                </div>

                <div>
                  <RegisterField
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="loginInput"
                  />
                  <Error name="password" component="div" />
                </div>
              </LogFieldDiv>
              <RegisterButtonDiv>
                <RegisterButton
                  type="submit"
                  className="loginButton"
                  disabled={isSubmitting}
                >
                  Login
                </RegisterButton>
                <p onClick={toRegistration} style={{ cursor: 'pointer' }}>
                  Don&apos;t have an account yet?
                </p>
              </RegisterButtonDiv>
            </LoginForm>
          )}
        </Formik>
      )}
      <FonDiv>
        <img src={phon} alt="" width="196px"></img>
      </FonDiv>
    </RegisterContainer>
  );
};

export default Register;
