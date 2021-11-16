import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm3.82-11.51a.5.5 0 00-.7 0l-4.74 4.74-1.5-1.49a.48.48 0 00-.7 0l-.53.53a.5.5 0 000 .71L10 15.35a.48.48 0 00.7 0l5.62-5.62a.5.5 0 000-.71z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M42 6v36H6V6h36zm-4 4H10v28h28V10zm-6.96 6.44l2.46 2.46-2.28 2.28-10.36 10.38-2.24-2.22-4.12-4.12 2.46-2.48.9.88 3 3 6.06-6.06 2.02-2.04 1.38-1.38.72-.7z"
    />
  ),
})
