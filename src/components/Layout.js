import * as React from "react"
import { title } from '../components/layout.module.css'

const Layout = ( {children} ) => {

	return (
	<div>
		<h1> Layout Loaded successfully </h1>
		{ children }
	</div>
)
	
}

export default Layout
