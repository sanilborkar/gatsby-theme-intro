import { graphql } from "gatsby"
import { arrayOf, string } from "prop-types"

export const PatentType = {
  name: string.isRequired,
  abstract: string,
  description: string,
  status: string,
  tags: arrayOf(string),
  link: string,
}

export const query = graphql`
  fragment PatentFragment on PatentsYaml {
    name
    abstract
    description
    status
    tags
    link
  }
`
