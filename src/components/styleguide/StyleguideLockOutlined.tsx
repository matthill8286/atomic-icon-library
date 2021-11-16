import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <React.Fragment>
      <path d="M18 12v8H6v-8zM12 2a6 6 0 00-6 6v2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2V8a6 6 0 00-6-6zm-4 8V8a4 4 0 018 0v2z" />
      <rect x="10" y="14" width="4" height="4" rx="1" ry="1" />
    </React.Fragment>
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24 4c6.618 0 12 5.382 12 12v4h4v24H8V20.048L12 20v-4c0-6.618 5.382-12 12-12zm12 20H12v16h24V24zm-8 4v8h-8v-8h8zM24 8c-4.412 0-8 3.588-8 8v4h16v-4c0-4.412-3.588-8-8-8z"
    />
  ),
})
