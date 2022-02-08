module.exports = ({ actions }) => {
  actions.createTypes(`
    type WorkHistoryYaml implements Node {
      id: ID!
      company: String!
      location: String
      period: String
      position: String
      url: String
    }

    type EducationsYaml implements Node {
      id: ID!
      name: String
      school: String
      location: String
      timeline: String
      gpa: String
    }

    type ProjectsYaml implements Node {
      id: ID!
      abstract: String
      description: String
      icon: String
      image: File @fileByRelativePath
      name: String!
      status: String
      tags: [String]
      url: String
    }

    type AwardsYaml implements Node {
      id: ID!
      description: String
      name: String!
      company: String
      tags: [String]
    }

    type PublicationsYaml implements Node {
      id: ID!
      description: String
      name: String!
      conference: String
      location: String
      tags: [String]
    }

    type PatentsYaml implements Node {
      id: ID!
      name: String!
      abstract: String
      description: String
      status: String
      tags: [String]
      link: String
    }
  `)
}
