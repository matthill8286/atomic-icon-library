import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M10 6.75v10.5a.76.76 0 01-.75.75h-1.5a.76.76 0 01-.75-.75V6.75A.76.76 0 017.75 6h1.5a.76.76 0 01.75.75zM16.25 6h-1.5a.76.76 0 00-.75.75v10.5a.76.76 0 00.75.75h1.5a.76.76 0 00.75-.75V6.75a.76.76 0 00-.75-.75z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
