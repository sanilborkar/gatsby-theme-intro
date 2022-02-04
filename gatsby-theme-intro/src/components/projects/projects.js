import React from "react"
import SectionTitle from "../section-title/section-title"
import Project from "./project"
import { arrayOf, shape, ProjectType } from "../../types"

const Projects = ({ projects }) => (
  <>
    <SectionTitle title="Projects" />

    {projects.map((project, i) => (
      <Project key={`${project.name}_${i}`} {...project} />
    ))}
  </>
)

Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects
