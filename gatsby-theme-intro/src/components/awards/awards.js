import React from "react"
import { arrayOf, shape, AwardType } from "../../types"
import Award from "./award"

const Awards = ({ awards }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Awards & Achievements
    </h5>
    {awards.map((award, i) => (
      <Award key={`${award.name}_${i}`} {...award} />
    ))}
  </>
)

Awards.propTypes = {
  awards: arrayOf(shape(AwardType)),
}

export default Awards
