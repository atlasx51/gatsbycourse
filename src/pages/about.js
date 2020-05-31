import React from 'react'
import { Link } from 'gatsby'

import Layout from '../component/layout'

const About = ()=>{
    return(
    <Layout>
          <p>Putting my thoughts and experiences out while learning a new craft.</p>
            <p>link, <Link to='/contact'></Link></p>
    </Layout>
    )
}


export default About