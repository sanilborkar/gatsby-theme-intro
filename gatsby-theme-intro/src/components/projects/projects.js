import React from "react"
import SectionTitle from "../section-title/section-title"
import Project from "./project"
import { arrayOf, shape, ProjectType } from "../../types"
import * as styles from "../../styles/projects.module.css"

const Projects = ({ projects }) => (
  <section id="projects">
    <SectionTitle title="Projects" />

    <div className={styles.projects}>
      {projects.map((project, i) => (
        <Project key={`${project.name}_${i}`} {...project} />
      ))}
    </div>
  </section>
)

Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects
