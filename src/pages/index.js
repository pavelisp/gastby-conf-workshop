import * as React from "react"
import Layout from '../components/Layout.js'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
  <Layout>
     <StaticImage src="https://i.guim.co.uk/img/media/cc5ff87a032ce6e4144e63a2a1cbe476dbc7cd5a/273_0_3253_1952/master/3253.jpg?width=700&quality=85&auto=format&fit=max&s=71c0169630a7fb2c2cf37b18affc2ead" alt="tis me, pavel" />
  	<h1>Congratulations, you've made it here finally...</h1>
  </Layout>  
  )

}

export default IndexPage
