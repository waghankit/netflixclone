import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/fa/close';
import {check} from 'react-icons-kit/fa/check'

export default function TabContentThree() {
    return (
        <TabContainer>
            <div className='tab-content' >
                <div className='tab-top-content' >
                     <span>Choose one plan and watch everything on Netflix.</span>
                     <Button className='btn' >try it now</Button>
                </div>
                <div className='tab-bottom-content'>
                     <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td>
                                    <Icon icon={close} size={10} />
                                </td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                            </tr>
                            <tr>
                                <td>Ultra HD available</td>
                                <td>
                                    <Icon icon={close} size={10} />
                                </td>
                                <td>
                                    <Icon icon={close} size={10} />
                                </td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                            </tr>
                            <tr>
                                <td>Screens you can watch at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                                <td>
                                    <Icon icon={check} size={10} />
                                </td>
                            </tr>
                        </tbody>
                     </table>  
                </div>
            </div>
        </TabContainer>
    )
}

const TabContainer = styled.div`
   background: var(--main-deep-dark);

   .tab-content{
       margin: 0 15%;
       padding-bottom: 1%;
   }

   .tab-top-content{
       display: grid;
       grid-template-columns: repeat(12, 1fr);
       padding: 3rem 0 0;
   }

   span {
       grid-column: 3 / 9;
   }

   .btn{
       grid-column: 9/12;
       margin-left: 3rem;
       margin-right: 5.1rem;
   }

   .tab-bottom-content{
       margin: 2rem auto;
   }

   table{
       width: 100%;
       margin-top: 2rem;
       border-collapse: collapse;
   }

   table thead th{
       text-transform: uppercase;
       padding: 0.8rem;
   }

   table tbody{
       display: table-row-group;
       vertical-align: middle;
       border-color: inherit;
   }

   table tbody tr td{
       color: #999;
       padding: 0.8rem 1.2rem;
       text-align: center;
   }

   table tbody tr td:first-child{
       text-align: left;
   }

   table tbody tr:nth-child(even){
       background: #222;
   }

`;
