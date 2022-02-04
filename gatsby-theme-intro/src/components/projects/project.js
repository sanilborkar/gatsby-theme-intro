import { GatsbyImage } from "gatsby-plugin-image"
import React, { useRef } from "react"
import { ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectStatus from "./project-status"
import ProjectTags from "./project-tags"
import Modal from "./project-modal"

const Project = (props) => {
  const { name, image, url, abstract, description, status, tags, icon } = props
  const modalRef1 = useRef()

  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      {image && (
        <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt={name}
          />
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        {url && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {url}
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{abstract}</p>
        {description && (
          <p>
            <button
              className="btn"
              onClick={() => modalRef1.current.openModal()}
            >
              <span className="text-sm font-medium opacity-80">More...</span>
            </button>
            <Modal ref={modalRef1}>
              <p className="w-full py-4 whitespace-pre-line">{description}</p>
            </Modal>
          </p>
        )}
        <ul className="pr-2">
          {status && <ProjectStatus status={status} />}
          {tags && <ProjectTags tags={tags} />}
        </ul>

        {icon && <ProjectIcon icon={icon} />}
      </div>
    </div>
  )
}

Project.propTypes = ProjectType

export default Project
