import React from "react"
import { arrayOf, shape, PublicationType } from "../../types"
import Publication from "./publication"

const Publications = ({ publications }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Publications
    </h5>
    {publications.map((publication, i) => (
      <Publication key={`${publication.name}_${i}`} {...publication} />
    ))}
  </>
)

Publications.propTypes = {
  publication: arrayOf(shape(PublicationType)),
}

export default Publications
