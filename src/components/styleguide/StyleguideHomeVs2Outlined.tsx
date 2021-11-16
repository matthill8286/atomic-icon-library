import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M21.71 10.71l-7.42-7.42a1 1 0 00-.7-.29h-3.18a1 1 0 00-.7.29l-7.42 7.42a1 1 0 00-.29.7v1.09a.5.5 0 00.5.5H4v7a1 1 0 001 1h5a1 1 0 001-1v-4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25V20a1 1 0 001 1h5a1 1 0 001-1v-7h1.5a.5.5 0 00.5-.5v-1.09a1 1 0 00-.29-.7zM18 19h-3v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H6V9.83L10.83 5h2.34L18 9.83z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24.378 8.444l15.178 15.178v15.934h-6.667V24H15.11v15.556H8.444V23.622L23.622 8.444h.756M25.31 4h-3.533L5.31 20.467 4 21.777V44h15.556V28.444h8.888V44H44V21.778l-1.311-1.311L26.867 4.644 26.222 4h-.91z"
    />
  ),
})
