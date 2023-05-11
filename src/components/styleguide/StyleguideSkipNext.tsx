import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M10 10l20 14-20 14V10zm27 2v24h-4V12h4z"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M10 10l20 14-20 14V10zm27 2v24h-4V12h4z"
    />
  ),
})
