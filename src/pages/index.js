import React from "react"
import {Link} from 'gatsby'
import Layout from '../component/layout'

const IndexPage = ()=>{
  return (

    <Layout>
      <h1>Hello</h1>
      <h2>Reside in the Grizzly City</h2>
      <p>some stuff, <a href='/contact'>Contact me.</a></p>
    
    <p>hit me up, <Link to='/contact'>Contact me!</Link></p>
   
    </Layout>
   
  )
}

export default IndexPage