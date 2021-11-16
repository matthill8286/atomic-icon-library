import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M12 22A10 10 0 102 12a10 10 0 0010 10zm0-18a8 8 0 11-8 8 8 8 0 018-8zm-.72 13.78a.77.77 0 00.53.22h.38a.75.75 0 00.53-.22l3.13-3.14a.5.5 0 000-.71l-.7-.71a.5.5 0 00-.71 0L13 14.67V6.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v8.17l-1.44-1.44a.49.49 0 00-.7 0l-.71.71a.5.5 0 000 .71z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M4 4v40h40V4H4zm4 4h32v32H8V8zm14 4h4v17.338l3.586-3.604 2.826 2.836L24 36.994l-8.41-8.424 2.82-2.82L22 29.338V12z"
    />
  ),
})
