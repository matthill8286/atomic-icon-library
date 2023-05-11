import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M4 40h40V8H4v32zm36-22.2v4.26L24 33.28 8 22.06V17.8l16 11.21L40 17.8z"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M4 40h40V8H4v32zm36-22.2v4.26L24 33.28 8 22.06V17.8l16 11.21L40 17.8z"
    />
  ),
})
