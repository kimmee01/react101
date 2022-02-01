import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

interface IHeader {
    url?: string;
}

const Menu = (props: IHeader) => {
    return (
        <Styled>
             <Link href="/">
                <div className="header">
                    <h1> React 101 </h1>
                </div>
             </Link>
         
            <ul>
               
            <Link href="/redux">
                    <li>
                        <p>redux</p>   
                    </li>
                </Link>
                <Link href="/style-component">
                    <li>
                        <p>style component</p>
                    </li>
                </Link>
            </ul>
        </Styled>
    )
}
Menu.propTypes = {
    
};


export default Menu;

const Styled = styled.nav`
    width: 20%;
    height: 100vh;
    background-color: var(--bs-blue);
    color: var(--bs-white);
    padding: 20px ;
    .header{
        cursor: pointer;
    }
    ul {
        list-style: none;
        margin-left: 0px;
        padding-left: 0px;
    }

    ul li {
        cursor: pointer;
        p{
            font-size:16px;
        }
    }

    li:hover { 
        color : var(--bs-purple);
    }
`;