import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M18 10a2 2 0 11-2 2 2 2 0 012-2zm-4 2a2 2 0 10-2 2 2 2 0 002-2zm-6 0a2 2 0 10-2 2 2 2 0 002-2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
