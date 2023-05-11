import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M40 4v40H8V16.012c0-.008.005-.014.009-.02L19.993 4.008c.004-.006.012-.008.02-.008H40zM26 32H14v4h12v-4zm8-8H14v4h20v-4zM22 7.64L11.64 18H22V7.64z"
    />
  ),
  alternate: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M40 4v40H8V16.012c0-.008.005-.014.009-.02L19.993 4.008c.004-.006.012-.008.02-.008H40zM26 32H14v4h12v-4zm8-8H14v4h20v-4zM22 7.64L11.64 18H22V7.64z"
    />
  ),
})
