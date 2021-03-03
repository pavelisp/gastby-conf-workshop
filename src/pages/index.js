import * as React from "react"
import Layout from '../components/Layout.js'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
  <Layout>
     <StaticImage width={500} src="https://pbs.twimg.com/profile_images/1364297824507211776/CPIPOexp_400x400.jpg" alt="tis me, pavel" />
  	<h1>Congratulations, you've made it here finally...</h1>
  </Layout>  
  )

}

export default IndexPage
