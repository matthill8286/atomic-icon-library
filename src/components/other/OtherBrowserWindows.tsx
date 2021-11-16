import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19 15V5a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2zM3 7h14v8H3zm18 0v10a2 2 0 01-2 2H5a2 2 0 002 2h12a4 4 0 004-4V9a2 2 0 00-2-2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
