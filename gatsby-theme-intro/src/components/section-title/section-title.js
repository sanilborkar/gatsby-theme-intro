import { string } from "prop-types"
import React from "react"

const SectionTitle = ({ title, textalign }) => (
  <>
    <h5
      className={`font-header font-semibold text-front text-lg uppercase mb-3 ${textalign}`}
    >
      {title}
    </h5>
  </>
)

SectionTitle.propTypes = {
  title: string,
}

export default SectionTitle
