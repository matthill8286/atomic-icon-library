import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54 9a6 6 0 016 6v27a6 6 0 01-6 6H6a6 6 0 01-6-6V15a6 6 0 016-6h3.51a6 6 0 004.26-1.77l4.59-4.59A9 9 0 0124.72 0h10.56a9 9 0 016.36 2.64l4.59 4.59A6 6 0 0050.49 9H54zM18 27c0 6.627 5.373 12 12 12a12 12 0 0012-12c0-6.627-5.373-12-12-12s-12 5.373-12 12z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
