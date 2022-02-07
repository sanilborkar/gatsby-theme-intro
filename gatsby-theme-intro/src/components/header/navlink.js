import React from "react"

const NavLink = ({ label, link }) => {
  return (
    <a
      href={`#${link}`}
      class="block mt-4 lg:inline-block lg:mt-0 font-header font-semibold hover:bg-lead mr-4"
    >
      {label}
    </a>
  )
}

export default NavLink
