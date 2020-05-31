import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'

const Layout = (props) => {
  return (
    <>
    <Header/>
      {props.children}
      <Footer/>
    </>
  )
}

export default Layout
