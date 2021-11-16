import React from 'react'
import getSvgComponent from '../../utils/GetSvgComponent'

export default getSvgComponent({
  primaryPaths: (
    <path d="M15 16a4 4 0 004-4V6a4 4 0 00-4-4H5a4 4 0 00-4 4v12.5a.5.5 0 00.5.5.49.49 0 00.35-.15l2-2A3 3 0 016 16zM3 15V6a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H6a5 5 0 00-3 1zm18-9v8a4 4 0 01-4 4H5a2 2 0 002 2h11a3 3 0 012.13.88l2 2a.49.49 0 00.35.15.5.5 0 00.5-.5V8A2 2 0 0021 6z" />
  ),
  danonePaths: (
    <path
      transform="scale(0.5, 0.5)"
      fill="#F2F3F4"
      fillRule="evenodd"
      d="M2.018 4v32.985L2 39.194v.22l7.427-7.427h28.575V4H2.018zm4 4h27.985v19.991H8.18l-2.16 1.92V8zm35.984 3.998v23.987H10.016v3.999h28.555l7.425 7.392.004-2.395V11.998h-3.998z"
    />
  ),
})
