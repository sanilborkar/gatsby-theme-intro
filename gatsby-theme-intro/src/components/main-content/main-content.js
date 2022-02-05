import React from "react"
import About from "../about/about"
import Awards from "../awards/awards"
import ContactForm from "../contact-form/contact-form"
import Patents from "../patents/patents"
import Projects from "../projects/projects"
import Publications from "../publications/publications"
import Skills from "../skills/skills"
import Summary from "../summary/summary"
import Tools from "../tools/tools"
import WorkHistory from "../work-history/work-history"

const MainContent = ({
  formspreeEndpoint,
  history,
  projects,
  awards,
  publications,
  patents,
  profile,
}) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />

      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.skills && <Skills skills={profile.skills} />}
        </div>
        <div className="md:w-1/4 pb-12">
          {profile.tools && <Tools tools={profile.tools} />}
        </div>
      </div>

      {profile.about && <About about={profile.about} />}
      <WorkHistory history={history} />
      {projects.length > 0 && <Projects projects={projects} />}
      {awards.length > 0 && <Awards awards={awards} />}
      {publications.length > 0 && <Publications publications={publications} />}
      {patents.length > 0 && <Patents patents={patents} />}
      {/* <ContactForm
        formspreeEndpoint={formspreeEndpoint}
        budget={profile.budget}
      /> */}
    </main>
  )
}

export default MainContent
