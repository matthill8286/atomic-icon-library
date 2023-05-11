import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24 4c6.62 0 12 5.38 12 12h-4c0-4.42-3.58-8-8-8s-8 3.58-8 8v4h24v24H8V20.07l4-.07v-4c0-6.62 5.38-12 12-12zm12 20H12v16h24V24zm-8 4v8h-8v-8h8z"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24 4c6.62 0 12 5.38 12 12h-4c0-4.42-3.58-8-8-8s-8 3.58-8 8v4h24v24H8V20.07l4-.07v-4c0-6.62 5.38-12 12-12zm12 20H12v16h24V24zm-8 4v8h-8v-8h8z"
    />
  ),
})
