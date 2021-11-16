import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M12 12a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zm7.89 12.55L18 14.66A3 3 0 0015.26 13H8.74a3 3 0 00-2.69 1.66l-1.94 3.89A1 1 0 005 20h14a1 1 0 00.89-1.45zM6.62 18l1.22-2.45a1 1 0 01.9-.55h6.52a1 1 0 01.9.55L17.38 18z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M24 24a8 8 0 100-16 8 8 0 000 16zm0-12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10.34 14H13.774L6.777 40h34.467L34.34 26zm-2.56 4H16.215l-2.97 6h21.508l-2.971-6z"
    />
  ),
})
