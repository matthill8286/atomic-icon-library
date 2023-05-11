import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M2 35h36V5H2v30zm4-20h28V9H6v6zm0 15.998h28V21H6v9.998zM42 13v26H10v4h36V13h-4z"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M2 35h36V5H2v30zm4-20h28V9H6v6zm0 15.998h28V21H6v9.998zM42 13v26H10v4h36V13h-4z"
    />
  ),
})
