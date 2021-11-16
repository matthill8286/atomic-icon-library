import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20 21a1 1 0 01-1.53.85l-5.94-3.72a1 1 0 00-1.06 0l-5.94 3.72A1 1 0 014 21V4a2 2 0 012-2h12a2 2 0 012 2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
