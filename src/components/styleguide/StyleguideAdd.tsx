import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M19 11.5v1a.5.5 0 01-.5.5H13v5.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V13H5.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11V5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V11h5.5a.5.5 0 01.5.5z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      d="M22 10v12H10v4h12v12h4V26h12v-4H26V10z"
      fillRule="evenodd"
    />
  ),
})
