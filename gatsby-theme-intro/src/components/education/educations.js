import React from "react"
import { arrayOf, shape, EducationType } from "../../types"
import Education from "./education"
import SectionTitle from "../section-title/section-title"
import * as styles from "../../styles/educations.module.css"

const Educations = ({ educations }) => (
  <section id="education">
    <SectionTitle title={"Education"} />

    <div className={styles.educations}>
      {educations.map((education, i) => (
        <Education key={`${education.name}_${i}`} {...education} />
      ))}
    </div>
  </section>
)

Educations.propTypes = {
  educations: arrayOf(shape(EducationType)),
}

export default Educations
