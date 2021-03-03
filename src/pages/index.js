import * as React from "react"
import Layout from '../components/Layout.js'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
  <Layout>
     <StaticImage width={500} src="https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-9/10172767_10152489041783134_3894124231665565621_n.jpg?_nc_cat=107&ccb=3&_nc_sid=ba80b0&_nc_ohc=sXTfN5WsOlAAX_xY-Eb&_nc_ht=scontent.fybz1-1.fna&oh=c1693e7c6c0046c11e138f79b6add3a2&oe=606517F1" alt="tis me, pavel" />
  	<h1>Congratulations, you've made it here finally...</h1>
  </Layout>  
  )

}

export default IndexPage
