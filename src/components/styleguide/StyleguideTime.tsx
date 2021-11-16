import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm.88-8.36V6.5a.5.5 0 00-.5-.5h-.76a.5.5 0 00-.5.5v5.66a.53.53 0 00.15.35l4 4a.51.51 0 00.71 0l.53-.53a.51.51 0 000-.71z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20A20 20 0 0024 4zm0 36c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16a16 16 0 01-16 16zm1.75-16.725V12h-3.5l-.004 12.722 9 9.002 2.476-2.478-7.972-7.97z"
    />
  ),
})
