import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.09 11.86a.48.48 0 010 .7l-.53.53a.48.48 0 01-.7 0L12 13.24l-1.86 1.85a.48.48 0 01-.7 0l-.53-.53a.48.48 0 010-.7L10.76 12l-1.85-1.86a.48.48 0 010-.7l.53-.53a.48.48 0 01.7 0L12 10.76l1.86-1.85a.48.48 0 01.7 0l.53.53a.48.48 0 010 .7L13.24 12z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M28.231 16.911l-4.24 4.24-4.24-4.24-2.84 2.84 4.24 4.24-4.24 4.24 2.84 2.84 4.24-4.24 4.24 4.24 2.84-2.84-4.24-4.24 4.24-4.24-2.84-2.84zm-22.32-11h36v36h-36v-36z"
    />
  ),
})
