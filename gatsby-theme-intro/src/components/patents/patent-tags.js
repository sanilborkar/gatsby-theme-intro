import React from "react"
import { PatentType } from "../../types"

const PatentTags = ({ tags }) => (
  <>
    {tags.map((tag) => (
      <li
        className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back"
        key={tag}
      >
        {tag}
      </li>
    ))}
  </>
)

PatentTags.propTypes = {
  tags: PatentType.tags,
}

export default PatentTags
