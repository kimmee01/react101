import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/header';
import { demoAction } from '../redux/actions/demo';

const ReduxPage = () => { 
    
    const dispatch = useDispatch()
    dispatch(demoAction({name: "kim"}))
    return (
        <>
            <Header pageName={"Redux"}/>
            <div className="container">
                <div> npm i -s redux react-redux redux-thunk next-redux-wrapper redux-devtools-extension</div>
                <div>redux dev tool  in chrome</div>
            </div>
        </>
    )
}

export default ReduxPage;