import { graphql } from "gatsby"
import { string } from "prop-types"

export const WorkHistoryType = {
  company: string.isRequired,
  location: string,
  period: string,
  position: string,
  url: string,
}

export const query = graphql`
  fragment WorkHistoryFragment on WorkHistoryYaml {
    company
    location
    period
    position
    url
  }
`
