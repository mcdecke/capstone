import React from 'react'
import { Container } from 'semantic-ui-react'
import Head from 'next/head'
import Header from './Header'
import Banner from './Banner'

export default props => {
  return (
    <Container>
    <Head>
      <link rel="stylesheet"
         href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css">
      </link>
      <link href="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css" rel="stylesheet"/>
    </Head>

    <Banner/>
    <Header/>
    {props.children}
    </Container>
  )
}
