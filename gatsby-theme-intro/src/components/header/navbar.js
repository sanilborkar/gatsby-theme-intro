import React from "react"
import NavLink from "./navlink"

const NavBar = ({
  isWork,
  isProjects,
  isAwards,
  isPublications,
  isPatents,
}) => {
  return (
    // TailwindCSS v1: Used "Responsive Header" code from https://v1.tailwindcss.com/components/navigation
    // TODO : Check v3 docs at https://tailwindui.com/components/application-ui/navigation/navbars
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <NavLink label="About" link="about" />
          {isWork && <NavLink label="Experience" link="work" />}
          {isProjects && <NavLink label="Projects" link="projects" />}
          {isAwards && <NavLink label="Awards" link="awards" />}
          {isPublications && (
            <NavLink label="Publications" link="publications" />
          )}
          {isPatents && <NavLink label="Patents" link="patents" />}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
