import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <React.Fragment>
      <path d="M18 10H8V8a4 4 0 018 0h2A6 6 0 006 8v2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm0 10H6v-8h12z" />
      <rect x="10" y="14" width="4" height="4" rx="1" ry="1" />
    </React.Fragment>
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24 4c6.62 0 12 5.38 12 12h-4c0-4.42-3.58-8-8-8s-8 3.58-8 8v4h24v24H8V20.07l4-.07v-4c0-6.62 5.38-12 12-12zm12 20H12v16h24V24zm-8 4v8h-8v-8h8z"
    />
  ),
})
