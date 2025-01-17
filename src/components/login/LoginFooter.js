import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default class LoginFooter extends Component {
    render() {
        return (
            <FooterContainer>
                <span style={{ marginLeft:'15%', fontSize: '1.125rem' }} >
                    Questions? <Link>Call 1-877-742-1335</Link>
                </span>
                <div className='footer-columns'>

                    <ul>
                        <li>
                            <Link>Gift Card Terms</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Privacy Statement</Link>
                        </li>
                    </ul>
                </div>
              
            </FooterContainer>
        )
    }
}


const FooterContainer = styled.footer`
   justify-content: center;
   background: rgba(0,0,0,0.8);
   padding-top: 2rem;
   padding-bottom: 3rem;
   color: #999;

   .footer-columns{
       width: 70%;
       margin: 1rem auto 0;
       font-size: 0.9rem;
       overflow: auto;
       display: grid;
       grid-template-columns: repeat(4, 1fr);
   }

   ul li{
       list-style: none;
       line-height: 2.5;
   }

   a {
       color: #999;
   }
   a:hover{
       text-decoration: underline;
       cursor: pointer;
   }

   .lang-btn{
       background: transparent;
       border: 0.9px solid #333;
       padding: 1rem;
       width: 8rem;
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       
   }

   .lang-toggle{
       margin-left: 15%;
       position: absolute;
   }

   .lang-toggle ul{
       background: var(--main-deep-dark);
       width: 8.125rem;
       border: 1px solid #333;
       text-align: center;
       &:hover{
           background: #0085ff;
           color: #fff;
       }
   }


`;
