import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'
import Head from 'next/head'
import withAnalytics from '~/hocs/withAnalytics'

const Title = styled.h1`
    color: #069;
    font-size: 40px;
`

const Home = () => (
  <div>
    <Head>
      <title>Next.js - Home</title>
    </Head>
    <img src='/static/landscape.jpg' width='300px'/>
    <Title>Hello World!</Title>
    <Link href='/users'>
      <a>Users</a>
    </Link>
  </div>
)

export default withAnalytics()(Home)