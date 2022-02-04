import React from "react"
import SectionTitle from "../section-title/section-title"
import Location from "./location"
import ProfileImage from "./profile-image"
import { arrayOf, shape, ProfileType, SocialType } from "../../types"
import SocialLinks from "../social-links/social-links"

const Sidebar = ({ profile, social }) => (
  <aside className="lg:w-1/5 lg:w-1/4 lg:border-r border-line lg:px-6 xl:px-12">
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="font-header font-light text-front text-2xl leading-none mb-4">
          {profile.profession}
        </h2>
        <h2 className="font-header font-black text-front text-4xl leading-none break-words mb-6">
          {profile.name}
        </h2>
        {profile.image && (
          <ProfileImage image={profile.image} name={profile.name} />
        )}
        <br />
        {profile.location && (
          <Location
            location={profile.location}
            relocation={profile.relocation}
          />
        )}
        <br />
        <div className="pt-8 pb-12 lg:py-0">
          <br />
          <SectionTitle title="Connect" />
          <SocialLinks social={social} />
        </div>
      </div>
    </div>
  </aside>
)

Sidebar.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
}

export default Sidebar
