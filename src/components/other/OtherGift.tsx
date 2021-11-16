import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19 8h-.54A4 4 0 0019 6a3 3 0 00-3-3 5.67 5.67 0 00-4 2.44A5.67 5.67 0 008 3a3 3 0 00-3 3 4 4 0 00.54 2H5a2 2 0 00-2 2v3a1 1 0 001 1h1v5a2 2 0 002 2h10a2 2 0 002-2v-5h1a1 1 0 001-1v-3a2 2 0 00-2-2zm-3-3a1 1 0 011 1 2 2 0 01-.88 1.66A2 2 0 0115 8h-2c0-1.09 1.91-3 3-3zM7 6a1 1 0 011-1c1.09 0 3 1.91 3 3H9a2 2 0 01-2-2zm-2 4h6v2H5zm2 4h4v5H7zm10 5h-4v-5h4zm2-7h-6v-2h6z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
