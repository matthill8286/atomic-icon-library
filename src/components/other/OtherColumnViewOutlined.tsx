import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20 6v12h-5V6h5m0-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2V6a2 2 0 00-2-2zM9 6v12H4V6h5m0-2H4a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2V6a2 2 0 00-2-2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
