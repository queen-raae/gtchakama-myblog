import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Github, Linkedin, Twitter } from "../icons"
import { Button } from "."
import { EmptyProps, ISite } from "@/definitions"

const Bio: React.FC<EmptyProps> = () => {
  const data: { site: ISite } = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <>
      <div className="">
        <StaticImage
          className="rounded-md overflow-hidden"
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
          src="../../images/me.png"
          // width={370}
          // height={200}
          quality={95}
          imgStyle={{ borderRadius: "5px"}}
          alt="Profile picture"
        />
        <div>
          <h1 className="font-bold font-exo text-2xl mt-4 text-skin-para-green tracking-wide">{author.name}</h1>
          <h2 className="text-2xl">Full-Stack Developer</h2>
          <div className="pt-2 flex space-x-4 justify-start">
            <Button
              label="Twitter"
              href={`https://twitter.com/${social.twitter || ""}`}
            >
              <Twitter className="w-5 h-5 fill-current" />
            </Button>
            <Button
              label="Linkedin"
              href={`https://linkedin.com/${social.linkedin || ""}`}
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </Button>
            <Button
              label="Github"
              href={`https://github.com/${social.github || ""}`}
            >
              <Github className="w-5 h-5 fill-current" />
            </Button>
            <Button
            label="Github"
            href={`https://github.com/${social.github || ""}`}
          >
            <Github className="w-5 h-5 fill-current" />
          </Button>
          </div>
        </div>
      </div>
      <p className="mt-5 font-yrsa text-lg text-skin-fg">I'm super passionate about exploring and building Progressive Web Apps. Currently, I'm diving into the React ecosystem with backend
          in Node.js</p>
          <div className="pt-2 flex space-x-4 justify-between">
            <Link to="/about" className="border rounded-md text-center hover:text-white p-1 w-1/3 hover:rounded-lg border-green-500 border-2 hover:bg-green-500 focus:ring-green-100 text-skin-fg" >Read More</Link>
            <Link to="/projects" className="border rounded-md text-center hover:text-white p-1 w-1/3 hover:rounded-lg border-green-500 border-2 hover:bg-green-500 focus:ring-green-100 text-skin-fg" >Projects</Link>
            <Link to="/contact" className="border rounded-md text-center hover:text-white p-1 w-1/3 hover:rounded-lg border-green-500 border-2 hover:bg-green-500 focus:ring-green-100 text-skin-fg" >Hire Me</Link>
          </div>
    </>
  )
}

export default Bio
