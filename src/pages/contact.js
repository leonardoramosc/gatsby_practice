import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {

	return (
		<Layout>
			<Head title="Contact me" />
			<h1>Contact Me</h1>
			<p>My phone number: 3246298</p>
			<p>
				Email: 
				<a 
					href="https://www.google.co.ve" 
					target="_blank" 
					rel="noreferrer">leonardor05@gmail.com
				</a>
			</p>
		</Layout>
	)
}

export default ContactPage;