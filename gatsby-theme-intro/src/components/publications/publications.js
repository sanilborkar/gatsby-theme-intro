import React from "react"
import { arrayOf, shape, PublicationType } from "../../types"
import SectionTitle from "../section-title/section-title"
import Publication from "./publication"

const Publications = ({ publications }) => (
  <>
    <SectionTitle title="Publications" />

    {publications.map((publication, i) => (
      <Publication key={`${publication.name}_${i}`} {...publication} />
    ))}
  </>
)

Publications.propTypes = {
  publication: arrayOf(shape(PublicationType)),
}

export default Publications
