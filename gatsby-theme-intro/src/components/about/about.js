import React from "react"
import SectionTitle from "../section-title/section-title"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <>
    <SectionTitle title="About" />

    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About
