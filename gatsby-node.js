const path = require('path');
/*
Cada vez que se cree un nodo, verificar si
el nodo es de tipo "MarkdownRemark", es decir,
verificar si es un Post, y de ser asi, extraer el
nombre del post (usando el nombre del archivo markdown,
el cual esta escificado en la ruta) y luego crear un
slug. El slug sera usado para crear una pagina
para cada post.
*/
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Chequear si el nodo es un markdown (en este caso, un post)
 	if(node.internal.type === "MarkdownRemark"){
 		// Obtener solamente el nombre del archivo eliminando la extension
 		const slug = path.basename(node.fileAbsolutePath, '.md');
 		// Crear el nuevo field con el slug.
 		createNodeField({
 			node, 
 			name: 'slug', 
 			value: slug
 		});
 		console.log(node.fields.slug);
 	}
}

module.exports.createPages = async ({graphql, actions}) => {
	const { createPage } = actions;
	// obtener el path del template del blog para utilizarlo en createPage
	const blogTemplate = path.resolve('./src/templates/blog.template.js');
	// Obtener la data del md para inssertarla en el template
	 // esta funcion retorna una promesa
	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);
	// Por cada post (archivo markdown) crear una nueva pagina
	res.data.allMarkdownRemark.edges.forEach(edge => {
		createPage({
			component: blogTemplate,
			// path es el url que se mostrara en el browser
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug
			}
		})
	})
}