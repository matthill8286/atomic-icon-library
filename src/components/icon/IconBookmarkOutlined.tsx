import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M18 4v15.19l-4.41-2.75a3 3 0 00-3.18 0L6 19.19V4h12m0-2H6a2 2 0 00-2 2v17a1 1 0 001 1 1 1 0 00.53-.15l5.94-3.72a1 1 0 011.06 0l5.94 3.72A1 1 0 0019 22a1 1 0 001-1V4a2 2 0 00-2-2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
