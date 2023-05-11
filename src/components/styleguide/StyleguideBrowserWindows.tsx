import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      d="M2 34h36V6H2v28zm4-4h28V14H6v16zm36-16v24H10v4h36V14h-4z"
      fillRule="evenodd"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      d="M2 34h36V6H2v28zm4-4h28V14H6v16zm36-16v24H10v4h36V14h-4z"
      fillRule="evenodd"
    />
  ),
})
