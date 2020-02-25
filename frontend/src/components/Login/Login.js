import React from 'react';
import PropTypes from 'prop-types';
import Style from './LoginStyle';

const Login = ({ onLogin }) => {
  return (
    <Style.LoginWrapper 
      onClick={onLogin}
    >
      LOGIN
    </Style.LoginWrapper>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default Login;