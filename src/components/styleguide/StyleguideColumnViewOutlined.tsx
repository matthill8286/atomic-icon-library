import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M20 6v12h-5V6h5m0-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2V6a2 2 0 00-2-2zM9 6v12H4V6h5m0-2H4a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2V6a2 2 0 00-2-2z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M40 12v24H30V12h10m4-4v32H26V8h18zm-26 4v24H8V12h10zM4 8h18v32H4V8z"
    />
  ),
})
