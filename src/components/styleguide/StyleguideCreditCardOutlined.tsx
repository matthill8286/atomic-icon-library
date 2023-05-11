import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M4 40h40V8H4v32zm4-21.998h32V12H8v6.002zM8 36h32V24H8v12zm4-4h8.002v-4.002H12V32z"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M4 40h40V8H4v32zm4-21.998h32V12H8v6.002zM8 36h32V24H8v12zm4-4h8.002v-4.002H12V32z"
    />
  ),
})
