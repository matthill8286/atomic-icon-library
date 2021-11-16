import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 5v14H5V5zm1-2H4a1 1 0 00-1 1v16a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zm9 2v2h-4V5zm1-2h-6a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zm-1 10v6h-4v-6zm1-2h-6a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1v-8a1 1 0 00-1-1z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
