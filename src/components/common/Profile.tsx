import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
      <div className="flex items-center space-x-3">
        <StaticImage
          className="rounded-full overflow-hidden"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/profile-pic.png"
          width={50}
          height={50}
          quality={95}
          imgStyle={{ borderRadius: "100%" }}
          alt="Profile picture"
        />
        <div>
          <h1 className="font-bold font-exo text-2xl  tracking-wide">{author.name}</h1>
          <div className="pt-2 flex space-x-4">
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
          </div>
        </div>
      </div>
      <p className="mt-5 font-yrsa text-lg text-skin-fg">I'm super passionate about exploring and building open-source web apps
          and tools. Currently, I'm diving into the React ecosystem with backend
          in Node.js</p>
    </>
  )
}

export default Bio
