import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M17 21a10.07 10.07 0 01-4.74-1.19l-.45-.25a18 18 0 01-7.33-7.33l-.25-.45A10.07 10.07 0 013 7v-.67a2 2 0 01.59-1.42l1.69-1.69a.75.75 0 011.18.15l2.25 3.86a1 1 0 01-.16 1.21l-1.89 1.89a.5.5 0 00-.09.59l.35.66a13.53 13.53 0 005.5 5.49l.66.36a.5.5 0 00.59-.09l1.89-1.89a1 1 0 011.21-.16l3.86 2.25a.75.75 0 01.15 1.18l-1.69 1.69a2 2 0 01-1.42.59z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
