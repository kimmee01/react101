import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

interface IHeader { 
    url? : string;
    pageName? : string;
}

const  Header = (props : IHeader) => { 
    return (
        <Styled>
            <Link href={props.url || "/"}>
                   <i className="fas fa-angle-left"></i>
            </Link>
            {
                props.pageName && (
                    <h2 className="page-name">{props.pageName}</h2>
                )
            }
          
        </Styled>
    ) 
}
Header.propTypes = {
    url : PropTypes.string,
    pageName : PropTypes.string
};


export default Header ;

const Styled = styled.nav`
    display: inline-flex; 
    align-items:  center;
    padding : 20px 30px;
    width: 100%;
    .page-name{
        margin-left: 20px;
    }
    i {
        font-size:30px;
        cursor: pointer;
    }
`;