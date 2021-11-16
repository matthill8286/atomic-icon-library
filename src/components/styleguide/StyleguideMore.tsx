import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M18 10a2 2 0 11-2 2 2 2 0 012-2zm-4 2a2 2 0 10-2 2 2 2 0 002-2zm-6 0a2 2 0 10-2 2 2 2 0 002-2z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M36 20l4 4-4 4-4-4 4-4zm-8 4l-4-4-4 4 4 4 4-4zm-12 0l-4-4-4 4 4 4 4-4z"
    />
  ),
})
