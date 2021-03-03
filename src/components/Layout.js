import * as React from "react"
import  { LayoutType, nav, title, navLinks } from '../components/layout.module.css'
import { Link, useStaticQuery, graphql } from "gatsby"

const Layout = ( {children} ) => {

	const data = useStaticQuery(graphql`
	query MyQuery {
		site {
		  siteMetadata {
			description
			title
		  }
		}
	  }`)

	return (
	<div className={ LayoutType }>
		<nav className={nav}>
			<Link className={navLinks} to="/"> Go back home </Link>
			<Link className={navLinks} to="/about"> Pavel's Abouts </Link>
		</nav>

		<h1 className={ title }> Pavel gave up on VIM </h1>
	<p>{data.site.siteMetadata.title}</p>
		{ children }
	</div>
)
	
}

export default Layout
