import React from "react"
import { ProfileType } from "../../types"
import SectionTitle from "../section-title/section-title"

const Tools = ({ tools }) => (
  <>
    <SectionTitle title="Main tools" />

    <ul className="flex-col mt-2">
      {tools.map((tool) => (
        <li className="inline-block md:block mb-1 mr-1 md:mr-0" key={tool}>
          <span className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-2xl text-lead-text">
            {tool}
          </span>
        </li>
      ))}
    </ul>
  </>
)

Tools.propTypes = {
  tools: ProfileType.tools,
}

export default Tools
