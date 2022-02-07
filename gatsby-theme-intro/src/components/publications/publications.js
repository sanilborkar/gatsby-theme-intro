import React from "react"
import { arrayOf, shape, PublicationType } from "../../types"
import SectionTitle from "../section-title/section-title"
import Publication from "./publication"

const Publications = ({ publications }) => (
  <section id="publications">
    <SectionTitle title="Publications" />

    {publications.map((publication, i) => (
      <Publication key={`${publication.name}_${i}`} {...publication} />
    ))}
  </section>
)

Publications.propTypes = {
  publication: arrayOf(shape(PublicationType)),
}

export default Publications
