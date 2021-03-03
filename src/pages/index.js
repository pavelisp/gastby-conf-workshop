import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout.js'

const IndexPage = () => {
  return (
  <Layout>
  	<h1>Congratulations, you've made it here finally...</h1>
	<Link to='/about'> Pavel's Abouts </Link>
  </Layout>  
  )

}

export default IndexPage
