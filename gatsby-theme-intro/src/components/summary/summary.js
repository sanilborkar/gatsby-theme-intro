import React from "react"
import { FaCompass } from "react-icons/fa"
import { shape, ProfileType } from "../../types"
import SectionTitle from "../section-title/section-title"

const Summary = ({ profile }) => (
  <div className="flex pb-8">
    <div className="w-1/2 pr-4 lg:pr-12 border-r border-line">
      <SectionTitle title="Company" />
      <h3 className="font-header font-light text-2xl text-front leading-tight">
        {profile.company}
      </h3>
      {profile.for_hire === "hire" ? (
        <div className="font-header font-semibold text-xs uppercase pt-2">
          <span className="inline-block w-2 h-2 rounded-full mr-1 bg-green-500"></span>
          Available for hire
        </div>
      ) : (
        <div className="font-header font-semibold text-xs uppercase pt-2">
          <span className="inline-block w-2 h-2 rounded-full mr-1 bg-gray-500"></span>
          Not looking for new opportunities
        </div>
      )}
    </div>
    <div className="w-1/2 pl-4 lg:pl-12">
      <SectionTitle title="Currently learning" />
      <div className="font-header font-light text-2xl text-front leading-tight">
        {profile.focus}
        {profile.focus_url && (
          <div>
            <a
              aria-label="website"
              className="inline-block text-front opacity-50 hover:opacity-75 h-4 w-4 transition-opacity duration-150"
              href={profile.focus_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaCompass />
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
)

Summary.propTypes = {
  profile: shape(ProfileType),
}

export default Summary
