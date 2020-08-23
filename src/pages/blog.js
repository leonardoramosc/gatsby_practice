import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

import Head from '../components/head';

const BlogPage = () => {
	const {allMarkdownRemark: {edges}} = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						fields {
							slug
						}
						html
						excerpt
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Blog" />
			<h1>Blog</h1>
			<ol className={blogStyles.posts}>
				{
					edges.map(({ node: {frontmatter: {title, date}, fields: {slug}} }) => {
						return (
							<li className={blogStyles.post} key={`${title} - ${date}`}>
								<Link to={`/blog/${slug}`}>
									<h2>{title}</h2>
									<p>{date}</p>
								</Link>
							</li>
						)
					})
				}
			</ol>
		</Layout>
	)
}

export default BlogPage;