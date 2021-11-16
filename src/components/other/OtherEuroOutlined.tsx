import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-11.25a3.21 3.21 0 012 .67.5.5 0 00.66-.05l.53-.54a.46.46 0 00.15-.38.52.52 0 00-.19-.36A5 5 0 007.1 11h-.6a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h.6a5 5 0 008 2.91.52.52 0 00.19-.36.46.46 0 00-.15-.38l-.53-.54a.5.5 0 00-.66-.05 3.21 3.21 0 01-2 .67A3.26 3.26 0 018.92 13h3.62a.76.76 0 00.67-.41l.61-1.23a.25.25 0 000-.24.25.25 0 00-.22-.12H8.92A3.26 3.26 0 0112 8.75z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
