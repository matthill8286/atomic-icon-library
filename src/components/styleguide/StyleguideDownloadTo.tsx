import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M19 18.5v1a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h13a.5.5 0 01.5.5zm-7.35-2.65a.48.48 0 00.7 0l5.79-5.79a.5.5 0 000-.71l-.2-.2a.49.49 0 00-.36-.15H15V3.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V9H6.42a.49.49 0 00-.36.15l-.2.2a.5.5 0 000 .71z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M18.172 7v11.657H10l2.061 2.061L24 32.661l14-14.004h-8.173V7H18.172zm-7.774 33.028h27.2v-3.886h-27.2v3.886z"
    />
  ),
})
