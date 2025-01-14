import { graphql } from "gatsby"
import { arrayOf, string } from "prop-types"

export const AwardType = {
  description: string,
  name: string.isRequired,
  company: string,
  tags: arrayOf(string),
}

export const query = graphql`
  fragment AwardFragment on AwardsYaml {
    description
    name
    company
    tags
  }
`
