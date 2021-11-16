import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M18 12v8H6v-8zM12 2a6 6 0 00-6 6v2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2V8a6 6 0 00-6-6zm-4 8V8a4 4 0 018 0v2z" />
      <rect x={10} y={14} width={4} height={4} rx={1} ry={1} />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
