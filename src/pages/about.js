import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {

	return (
		<Layout>
			<Head title="About me" />
			<h1>About</h1>
			<p>This page is about me learning Gatsby Js</p>
			<Link to="/contact">Contact me</Link>
		</Layout>
	)
}

export default AboutPage;