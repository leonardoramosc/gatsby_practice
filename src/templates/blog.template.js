/*
Este template sera usado por la funcion "createPage"
que creamos en el archivo "gatsby-node.js" (esta funcion
creara una nueva pagina por cada post), en ese archivo
cuando se hace uso de la funcion "createPage", una de las propieades
que se le pasa al objeto que recibe como parametro es "context", este 
es un objeto cuyas propiedades seran usadas como variables en la query
que se esta creando en este archivo. En este caso, por ejemplo, 
la variable "$slug" (linea 19) se la pasamos especificando en "context" la propiedad
"slug" (ver las lineas 47-55 del archivo gatsby-node.js).
*/
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

// Para que gatsby pueda acceder a esta query debemos exportarla
export const query = graphql`
	query ($slug: String) {
  	markdownRemark (fields: {slug: {eq: $slug}}) {
  	  frontmatter {
  	    title
  	    date
  	  }
  	  html
  	}
	}
`;

// Una vez que gatsby haya ejecutado la query, se la pasara como prop a este componente.

const Blog = ({data: {markdownRemark: {frontmatter, html}}}) => {
	return (
		<Layout>
			<Head title={frontmatter.title} />
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{__html: html}}></div>
		</Layout>
	)
}

export default Blog;