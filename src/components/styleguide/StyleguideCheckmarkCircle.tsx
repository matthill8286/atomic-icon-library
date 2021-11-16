import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4.35 7.73l-5.62 5.62a.48.48 0 01-.7 0L7.65 13a.5.5 0 010-.71l.53-.53a.48.48 0 01.7 0l1.5 1.49 4.74-4.74a.5.5 0 01.7 0l.53.53a.5.5 0 010 .69z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M6 6v36h36V6H6zm25.22 15.18L20.86 31.56l-2.24-2.22-4.12-4.12 2.46-2.48.9.88 3 3 6-6 2-2 1.38-1.38.72-.7.7.7.46.46 1.3 1.3-2.2 2.18z"
    />
  ),
})
