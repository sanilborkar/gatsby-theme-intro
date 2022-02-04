import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const ProjectType = {
  abstract: string,
  description: string,
  icon: oneOf(["github", "website"]),
  image: shape({
    childImageSharp: object.isRequired,
  }),
  name: string.isRequired,
  status: string,
  tags: arrayOf(string),
  url: string,
}

export const query = graphql`
  fragment ProjectFragment on ProjectsYaml {
    abstract
    description
    icon
    image {
      childImageSharp {
        gatsbyImageData(width: 640, quality: 85)
      }
    }
    name
    status
    tags
    url
  }
`
