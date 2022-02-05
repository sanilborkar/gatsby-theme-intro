import React from "react"
import { PatentType } from "../../types"

const PatentStatus = ({ status }) => (
  <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back">
    <span
      className={`inline-block w-2 h-2 rounded-full mr-2 ${
        ["completed", "live"].includes(status.toLowerCase())
          ? "bg-green-500"
          : "bg-blue-500"
      }`}
    ></span>
    Status: {status}
  </li>
)

PatentStatus.propTypes = {
  status: PatentType.status,
}

export default PatentStatus
