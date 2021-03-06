import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M4.38 3.15a.48.48 0 00-.7 0l-.53.53a.48.48 0 000 .7L5.75 7a9.66 9.66 0 00-3.69 4.68A1 1 0 002 12a.81.81 0 00.06.31A10.65 10.65 0 0012 19a10.82 10.82 0 004.67-1.09l2.95 2.94a.48.48 0 00.7 0l.53-.53a.48.48 0 000-.7zM12 17a8.82 8.82 0 01-7.93-5A8.11 8.11 0 017.2 8.44l2.16 2.16a3 3 0 004 4l1.76 1.76A9 9 0 0112 17zm10-5.3A10.71 10.71 0 009.12 5.4l1.69 1.69A8 8 0 0112 7a8.82 8.82 0 017.93 5 7.26 7.26 0 01-1.74 2.47l1.42 1.42a9.11 9.11 0 002.33-3.56A.81.81 0 0022 12a.93.93 0 000-.3z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
