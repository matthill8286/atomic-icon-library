import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20.5 3h-.3a2 2 0 00-.77.15L15 5l-4.25-1.77A3 3 0 009.6 3H8.4a3 3 0 00-1.15.23L3.62 4.74a1 1 0 00-.62.93V20.5a.5.5 0 00.5.5h.3a2 2 0 00.77-.15L9 19l4.25 1.77a3 3 0 001.15.23h1.2a3 3 0 001.15-.23l3.63-1.51a1 1 0 00.62-.93V3.5a.5.5 0 00-.5-.5zM5 6.33l3-1.25v12.17L5 18.5zm5 10.92V5.08l4 1.67v12.17zm9 .42l-3 1.25V6.75l3-1.25z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
