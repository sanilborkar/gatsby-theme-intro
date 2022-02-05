import React from "react"
import { arrayOf, shape, PatentType } from "../../types"
import Patent from "./patent"
import SectionTitle from "../section-title/section-title"

const Patents = ({ patents }) => (
  <>
    <SectionTitle title={"Patents"} />

    <div>
      {patents.map((patent, i) => (
        <Patent key={`${patent.name}_${i}`} {...patent} />
      ))}
    </div>
  </>
)

Patents.propTypes = {
  patents: arrayOf(shape(PatentType)),
}

export default Patents
