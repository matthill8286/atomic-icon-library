import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 39 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.6 0H4.8A4.8 4.8 0 000 4.8v38.4A4.8 4.8 0 004.8 48h28.8a4.8 4.8 0 004.8-4.8V4.8A4.8 4.8 0 0033.6 0zm-8.4 4.8A1.2 1.2 0 0126.4 6v2.4a1.2 1.2 0 01-1.2 1.2H6a1.2 1.2 0 01-1.2-1.2V6A1.2 1.2 0 016 4.8h19.2zm7.2 4.8a1.2 1.2 0 001.2-1.2V6a1.2 1.2 0 00-1.2-1.2H30A1.2 1.2 0 0028.8 6v2.4A1.2 1.2 0 0030 9.6h2.4zM7.2 28.8c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12a12 12 0 01-12-12zm24 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
