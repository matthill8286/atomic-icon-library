import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M18 10H8V8a4 4 0 018 0h2A6 6 0 006 8v2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-4 7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24 4c6.618 0 12 5.382 12 12h-4c0-4.412-3.588-8-8-8s-8 3.588-8 8v4h24v24H8V20.022L12 20v-4c0-6.618 5.382-12 12-12zm4 24h-8v8h8v-8z"
    />
  ),
})
