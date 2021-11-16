import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M18 4v15.19l-4.41-2.75a3 3 0 00-3.18 0L6 19.19V4h12m0-2H6a2 2 0 00-2 2v17a1 1 0 001 1 1 1 0 00.53-.15l5.94-3.72a1 1 0 011.06 0l5.94 3.72A1 1 0 0019 22a1 1 0 001-1V4a2 2 0 00-2-2z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      d="M40 4v41.606l-16-10-16 10V4h32zm-4 4H12v30.389l12-7.5 12 7.501V8z"
      fillRule="evenodd"
    />
  ),
})
