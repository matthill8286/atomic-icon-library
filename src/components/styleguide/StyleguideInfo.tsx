import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24 4a20 20 0 0120 20c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4zm2 20h-4v8h4v-8zm0-8h-4v4h4v-4z"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24 4a20 20 0 0120 20c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4zm2 20h-4v8h4v-8zm0-8h-4v4h4v-4z"
    />
  ),
})
