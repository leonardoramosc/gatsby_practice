import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
	const {site: {siteMetadata}} = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title, author
				}
			}
		}
	`)
	
	return (
		<header className={headerStyles.header}>
			<h1>
				<Link to="/" className={headerStyles.title}>
					{siteMetadata.title}
				</Link>
			</h1>
			<nav>
				<ul className={headerStyles.navList}>
					<li>
						<Link 
							className={headerStyles.navItem}
							activeClassName={headerStyles.navItemActive} 
							to="/">
								Home
						</Link>
					</li>
					<li>
						<Link 
							className={headerStyles.navItem}
							activeClassName={headerStyles.navItemActive} 
							to="/blog">
								Blog
						</Link>
					</li>
					<li>
						<Link 
							className={headerStyles.navItem}
							activeClassName={headerStyles.navItemActive} 
							to="/about">
								About me
						</Link>
					</li>
					<li>
						<Link 
							className={headerStyles.navItem}
							activeClassName={headerStyles.navItemActive} 
							to="/contact">
								Contact me
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;