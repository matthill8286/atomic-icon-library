import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      d="M36 30v10H12V30h24zm4-26v18H8V4h32zm0 22v18H8V26h32zM36 8v10H12V8h24z"
      fillRule="evenodd"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      d="M36 30v10H12V30h24zm4-26v18H8V4h32zm0 22v18H8V26h32zM36 8v10H12V8h24z"
      fillRule="evenodd"
    />
  ),
})
