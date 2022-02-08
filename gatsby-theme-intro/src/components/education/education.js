import React from "react"
import { EducationType } from "../../types"

const Education = (props) => {
  const { name, school, location, timeline, gpa } = props
  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        <h4 className="font-medium opacity-50">
          {school}, {location}
        </h4>
        <h4>{timeline}</h4>
        <h5>GPA: {gpa}</h5>
      </div>
    </div>
  )
}

Education.propTypes = EducationType

export default Education
