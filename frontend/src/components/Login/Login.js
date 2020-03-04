import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import Style from './LoginStyle';

const Login = ({ onLogin }) => {
  return (
    <Style.LoginWrapper 
      onClick={onLogin}
    >
      <FaUserAlt 
        size={20}
      />
    </Style.LoginWrapper>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

export default Login;