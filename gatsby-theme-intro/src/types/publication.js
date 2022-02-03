import { graphql } from "gatsby"
import { arrayOf, string } from "prop-types"

export const PublicationType = {
  description: string,
  name: string.isRequired,
  conference: string.isRequired,
  location: string.isRequired,
  tags: arrayOf(string),
}

export const query = graphql`
  fragment PublicationFragment on PublicationsYaml {
    description
    name
    conference
    location
    tags
  }
`
