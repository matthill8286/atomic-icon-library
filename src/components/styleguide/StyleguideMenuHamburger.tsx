import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: <path fillRule="evenodd" d="M36 4H0V0h36v4zm0 8H0v4h36v-4zm0 16v-4H0v4h36z" />,
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M42 14H6v-4h36v4zm0 8H6v4h36v-4zm0 16v-4H6v4h36z"
    />
  ),
})
