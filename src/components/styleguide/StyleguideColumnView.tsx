import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M22 18V6a2 2 0 00-2-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2zM9 20H4a2 2 0 01-2-2V6a2 2 0 012-2h5a2 2 0 012 2v12a2 2 0 01-2 2z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M26 8h18v32H26V8zM4 8h18v32H4V8z"
    />
  ),
})
