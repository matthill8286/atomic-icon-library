import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M40 12v24H30V12h10m4-4v32H26V8h18zm-26 4v24H8V12h10zM4 8h18v32H4V8z"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M40 12v24H30V12h10m4-4v32H26V8h18zm-26 4v24H8V12h10zM4 8h18v32H4V8z"
    />
  ),
})
