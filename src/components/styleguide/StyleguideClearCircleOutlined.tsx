import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm3.09-10.56l-.53-.53a.48.48 0 00-.7 0L12 10.76l-1.86-1.85a.48.48 0 00-.7 0l-.53.53a.48.48 0 000 .7L10.76 12l-1.85 1.86a.48.48 0 000 .7l.53.53a.48.48 0 00.7 0L12 13.24l1.86 1.85a.48.48 0 00.7 0l.53-.53a.48.48 0 000-.7L13.24 12l1.85-1.86a.48.48 0 000-.7z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M6 6h36v36H6V6zm32 32H10V10h28v28zm-9.68-21l-4.24 4.24L19.84 17 17 19.84l4.24 4.24L17 28.32l2.84 2.84 4.24-4.24 4.24 4.24 2.84-2.84-4.24-4.24 4.24-4.24L28.32 17z"
    />
  ),
})
