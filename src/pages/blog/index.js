import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import BlogCard from '../../components/blog-card/blog-card'

import './blog.css'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="Blog Posts">
      <div className="blog-cards-wrapper">
      {
          data.allMdx.nodes.map(node => (            
            <article key={node.id}>
              <BlogCard node={node}></BlogCard>
            </article>
          ))
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          hero_image_alt
          hero_image_thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body
        slug
      }
    }
  }
`

export default BlogPage