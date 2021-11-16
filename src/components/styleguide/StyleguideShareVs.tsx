import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M14 14c-4.72 0-9.5 2-10 4.59a.5.5 0 01-.49.41h-.1a.46.46 0 01-.32-.13.5.5 0 01-.09-.33A11.22 11.22 0 0114 8V5.42a.49.49 0 01.15-.36l.2-.2a.5.5 0 01.71 0l5.79 5.79a.48.48 0 010 .7l-5.79 5.79a.5.5 0 01-.71 0l-.2-.2a.49.49 0 01-.15-.36z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M28.162 27.996c-9.935 0-20.01 4.252-20.994 9.66-.092.502-.179.963-.179.963H5.004s-.01-.806 0-1.059c.535-12.343 11.305-22.196 23.158-22.196V9.488L29.65 8l13.68 13.68-13.68 13.68-1.488-1.488v-5.876z"
    />
  ),
})
