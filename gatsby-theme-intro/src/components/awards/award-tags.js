import React from "react"
import { AwardType } from "../../types"

const AwardTags = ({ tags }) => (
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

AwardTags.propTypes = {
  tags: AwardType.tags,
}

export default AwardTags
