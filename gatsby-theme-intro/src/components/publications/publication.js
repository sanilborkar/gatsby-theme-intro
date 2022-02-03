import React from "react"
import { PublicationType } from "../../types"
import PublicationTags from "./publication-tags"

const Publication = (props) => {
  const { name, description, conference, location, tags } = props
  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        <h4 className="font-medium opacity-50">
          {conference}, {location}
        </h4>
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2">{tags && <PublicationTags tags={tags} />}</ul>
      </div>
    </div>
  )
}

Publication.propTypes = PublicationType

export default Publication
