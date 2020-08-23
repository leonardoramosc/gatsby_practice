/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
  	title: 'Gatsby Practice',
  	author: 'Leonardo Ramos'
  },
  plugins: [
  `gatsby-plugin-react-helmet`,
  'gatsby-plugin-sass',
  {
  	resolve: 'gatsby-source-filesystem',
  	options: {
  		name: 'src',
  		path: `${__dirname}/src/`
  	}
  },
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        'gatsby-remark-relative-images',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 750,
            linkImagesToOriginal: false
          }
        }
      ]
    }
  }
  ],
}

/*
"gatsby-source-filesystem": sirve para ofrecer a gatsby un directorio
en el cual pueda ver los archivos y poder consultarlos con graphql.

"gatsby-plugin-sharp": sirve para procesar las imagenes

"gatsby-remark-images": permite usar imagenes dentro de archivos markdown

"gatsby-remark-relative-images": permite obtener imagenes que esten ubicadas
relativas al archivo markdown, es decir, podemos sirve para especificar
la ruta de las imagenes que queremos colocar dentro del archivo markdown,
especidificando un relative path.
*/