import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M18 10V8A6 6 0 006 8v2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zM8 8a4 4 0 018 0v2H8zm6 9a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M12 16c0-7.494 6.906-13.406 14.688-11.706C32.23 5.504 36 10.696 36 16.37V20h4v24H8V20h4zm16 12h-8v8h8v-8zM16 16c0-4.958 4.534-8.878 9.674-7.83C29.436 8.938 32 12.472 32 16.312V20H16v-4z"
    />
  ),
})
