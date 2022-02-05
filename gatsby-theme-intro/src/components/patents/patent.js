import React from "react"
import { PatentType } from "../../types"
import PatentTags from "./patent-tags"

const Patent = (props) => {
  const { name, abstract, description, tags } = props
  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2">{tags && <PatentTags tags={tags} />}</ul>
      </div>
    </div>
  )
}

Patent.propTypes = PatentType

export default Patent
