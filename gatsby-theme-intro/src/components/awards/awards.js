import React from "react"
import { arrayOf, shape, AwardType } from "../../types"
import Award from "./award"
import * as styles from "../../styles/awards.module.css"
import SectionTitle from "../section-title/section-title"

const Awards = ({ awards }) => (
  <>
    <SectionTitle title={"Awards & Achievements"} />

    <div className={styles.awards}>
      {awards.map((award, i) => (
        <Award key={`${award.name}_${i}`} {...award} />
      ))}
    </div>
  </>
)

Awards.propTypes = {
  awards: arrayOf(shape(AwardType)),
}

export default Awards
