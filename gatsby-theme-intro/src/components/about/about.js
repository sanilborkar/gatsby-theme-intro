import React from "react"
import SectionTitle from "../section-title/section-title"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <section id="about">
    <SectionTitle title="About" />

    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      {about}
    </div>
  </section>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About
