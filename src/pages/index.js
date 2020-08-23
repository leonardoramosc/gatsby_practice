import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {

	return (
		<Layout>
			<Head title="Home" />
			<h1>Hello</h1>
			<h2>I'm Leonardo, a full-stack developer living in beautiful Buenos Aires</h2>
			<p>Need a developer? <Link to="/contact">Contact me.</Link></p>
			<Link to="/about">About me</Link>
		</Layout>
	)
}

export default IndexPage;
