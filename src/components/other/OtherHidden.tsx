import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M4.38 3.15a.48.48 0 00-.7 0l-.53.53a.48.48 0 000 .7L5.75 7a9.66 9.66 0 00-3.69 4.68A1 1 0 002 12a.81.81 0 00.06.31A10.65 10.65 0 0012 19a11 11 0 004.67-1.09l2.95 2.94a.48.48 0 00.7 0l.53-.53a.48.48 0 000-.7zM12 15a3 3 0 01-3-3 2.89 2.89 0 01.37-1.4l4 4A2.89 2.89 0 0112 15zm10-3.3A10.67 10.67 0 009.12 5.41L19.61 15.9a9.41 9.41 0 002.33-3.57A.81.81 0 0022 12a.93.93 0 000-.3z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
