import React, { Component } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';


export default class Login extends Component {
    render() {
        return (
            <div className='main-login-container' >
                <div className='header-top'>
                   <Logo src="svg/logo.svg" alt='logo' className='logo' />
                </div>
                <LoginForm />
                <LoginFooter />
            </div>
        )
    }
}

const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;
