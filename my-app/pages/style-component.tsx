import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/header';
import { demoAction } from '../redux/actions/demo';

const StyleComponentPage = () => { 
    
    const dispatch = useDispatch()
    dispatch(demoAction({name: "kim"}))
    return (
        <>
            <Header pageName={"Style Component"}/>
            <div className="container">
                <div> npm i -s style-components</div>
                <div> npm i -s babel-plugin-styled-components</div>
                <div> create file .babelrc </div>
                <div> {`
                {"presets": ["next/babel"],
                "plugins": [["styled-components", { "ssr": true }]]}`}
                </div>

            </div>
         
        </>
    )
}

export default StyleComponentPage;