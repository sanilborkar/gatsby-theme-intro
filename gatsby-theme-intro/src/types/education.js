import { graphql } from "gatsby"
import { string } from "prop-types"

export const EducationType = {
  name: string.isRequired,
  school: string,
  location: string,
  timeline: string,
  gpa: string,
}

export const query = graphql`
  fragment EducationFragment on EducationsYaml {
    name
    school
    location
    timeline
    gpa
  }
`
