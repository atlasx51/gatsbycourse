import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
      <Header/>
      {props.children}
      </div>
   
      <Footer/>
    </div>
  )
}

export default Layout
