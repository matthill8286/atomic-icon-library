import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M36 4H22.48a6 6 0 00-4.24 1.76l-8.48 8.48A6 6 0 008 18.48V40a4 4 0 004 4h24a4 4 0 004-4V8a4 4 0 00-4-4zm0 36H12V20h10a2 2 0 002-2V8h12zM16 25v2a1 1 0 001 1h14a1 1 0 001-1v-2a1 1 0 00-1-1H17a1 1 0 00-1 1zm9 7h-8a1 1 0 00-1 1v2a1 1 0 001 1h8a1 1 0 001-1v-2a1 1 0 00-1-1z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
