import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { Seo } from "../components/common"
import { PageProps } from "@/definitions"
import { Helmet } from "react-helmet"
const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  // const mybanner = data.mdx.frontmatter.
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        // opengraph = {post.frontmatter.title}
      />
      <Helmet>
                <meta charSet="utf-8" />
                <title>{post.frontmatter.title} </title>
                <meta name="description" content={post.frontmatter.description}  />
                <meta property="og:image" content="https://i.ibb.co/BwYXRjr/twitter-card.png"/>

                <meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@gtchakama" />
<meta name="twitter:title" content={post.frontmatter.title} />
<meta name="twitter:description" content={post.frontmatter.description} />
<meta name="twitter:image" content="https://i.ibb.co/BwYXRjr/twitter-card.png" />

<meta property="og:type" content="article" />
<meta property="og:title" content={post.frontmatter.title}  />
<meta property="og:description" content={post.frontmatter.description}/>
<meta property="og:url" content="https://www.chakama.co.zw/" />
<meta property="og:image" content="https://i.ibb.co/BwYXRjr/twitter-card.png" />
            </Helmet>
      <article itemScope itemType="http://schema.org/Article">
        <header className="grid grid-cols-blog text-center">
          <h1
            className="col-start-2 self-title font-black text-skin-para-green text-3xl md:text-4xl"
            itemProp="headline"
          >
            {post.frontmatter.title}
          </h1>
        
          <p className="col-start-2 self-small-heading text-skin-fg text-xl">
            {post.frontmatter.date}
          </p>
        </header>
        <section itemProp="articleBody" className="prose prose-xl self-paragraph mt-8 mx-auto">
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
      <nav className="mt-8 grid grid-cols-blog">
        <ul className="col-start-2 text-lg flex flex-wrap justify-around">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
       
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
