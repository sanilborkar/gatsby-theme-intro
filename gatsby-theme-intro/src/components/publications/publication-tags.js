import React from "react"
import { PublicationType } from "../../types"

const PublicationTags = ({ tags }) => (
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

PublicationTags.propTypes = {
  tags: PublicationType.tags,
}

export default PublicationTags
