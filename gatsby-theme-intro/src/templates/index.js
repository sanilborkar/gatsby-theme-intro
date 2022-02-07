import { graphql } from "gatsby"
import React from "react"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MainContent from "../components/main-content/main-content"
import SEO from "../components/seo/seo"
import Sidebar from "../components/sidebar/sidebar"
import StructuredData from "../components/structured-data/structured-data"
import "../styles/style.css"

const IndexPage = ({ data }) => {
  const {
    history,
    profile,
    projects,
    awards,
    publications,
    patents,
    site,
    social,
  } = data

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <SEO />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Header
        initials={profile.initials}
        isWork={history.nodes.length > 0}
        isProjects={projects.nodes.length > 0}
        isAwards={awards.nodes.length > 0}
        isPublications={publications.nodes.length > 0}
        isPatents={patents.nodes.length > 0}
      />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <MainContent
          history={history.nodes}
          profile={profile}
          projects={projects.nodes}
          awards={awards.nodes}
          publications={publications.nodes}
          patents={patents.nodes}
          formspreeEndpoint={site.siteMetadata.formspreeEndpoint}
        />
      </div>

      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        showThemeLogo
        formspreeEndpoint
      }
    }
    awards: allAwardsYaml {
      nodes {
        ...AwardFragment
      }
    }
    patents: allPatentsYaml {
      nodes {
        ...PatentFragment
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
    publications: allPublicationsYaml {
      nodes {
        ...PublicationFragment
      }
    }
  }
`
