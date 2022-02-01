import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { createWrapper } from "next-redux-wrapper"
import React from 'react'
import { Provider } from 'react-redux'
import store from "../redux/store"
import Menu from '../components/menu'
import styled from 'styled-components'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
        <Head>
        <title>develop by kim</title>
        {/* cdn font-awesome  */}
        <link
              rel="stylesheet"
              href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
              integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
              crossOrigin="anonymous"
            />
              {/* Set icon title */}
        <link
          rel="shortcut icon"
          href={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkND3oCY7K_p_0jvdJPBUeRYTSlIhV08BVlw&usqp=CAU`}
        />
      </Head>
      
          <Body>
          <Menu/>
            <div className="content">
              <Component {...pageProps} />
            </div>
          </Body>
    </Provider> 
 
}

const wrapper = createWrapper(() => store)
export default wrapper.withRedux(MyApp)

const Body = styled.div`
  display: flex;
  .content{ 
    width: 100%;
    background-color: var(--bs-yellow);
  }
`;