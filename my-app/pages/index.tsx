import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Calendar from '../components/calendar/calendar'
import Header from '../components/header'
import Menu from '../components/menu'

const Home: NextPage = () => {
  return (
    <Styled>
      <Header/>
    </Styled>
  )
}

export default Home

const Styled = styled.div`
  
`;
