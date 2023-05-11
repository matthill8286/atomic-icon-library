import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M40 4v40H8V15.998L20 4h20zm-4 4H24v12H11.998v20H36V8zM25.998 31.998V36h-10v-4.002h10zm6-7.998v4h-16v-4h16z"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M40 4v40H8V15.998L20 4h20zm-4 4H24v12H11.998v20H36V8zM25.998 31.998V36h-10v-4.002h10zm6-7.998v4h-16v-4h16z"
    />
  ),
})
