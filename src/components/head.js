import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({title}) => {
	const {site: {siteMetadata: {title: siteTitle}}} = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)


	return (
		<Helmet title={`${siteTitle} | ${title}`} />
	)
}

export default Head;