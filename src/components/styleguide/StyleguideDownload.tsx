import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.85 12.64l-3.13 3.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22l-3.13-3.14a.5.5 0 010-.71l.71-.71a.49.49 0 01.7 0L11 14.67V6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v8.17l1.44-1.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M4 4v40h40V4H4zm18 8h4v17.338l3.586-3.604 2.826 2.836L24 36.994l-8.41-8.424 2.82-2.82L22 29.338V12z"
    />
  ),
})
