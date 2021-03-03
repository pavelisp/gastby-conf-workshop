import * as React from "react"
import  { LayoutType, nav, title } from '../components/layout.module.css'
import { Link } from "gatsby"

const Layout = ( {children} ) => {

	return (
	<div className={ layoutType }>
		<nav className={nav}>
			<Link to="/"> Go back home </Link>
			<Link to="/about"> Pavel's Abouts </Link>
		</nav>

		<h1 className={ title }> Layout Loaded successfully </h1>
		{ children }
	</div>
)
	
}

export default Layout
