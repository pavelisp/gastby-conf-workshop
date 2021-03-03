import * as React from "react"
import Layout from '../components/Layout.js'
import { graphql } from "gatsby"

const blog = ({ data }) => {

          
  return (
	  <Layout>
  <h1>Pavlov log glob blog </h1>
<ul>
 {data.allFile.nodes.map(
   post => (<li>{post.name}</li>)
 )}
</ul>
	  </Layout>
  )

}

export const query = graphql`query {
  allFile(filter: {dir: {regex: "/blog/"}}) {
    nodes {
      name
    }
  }
}`

export default blog 
