import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={80} width={80} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M70.56 15L80 24.44l-40 40-40-40L9.44 15 40 45.72z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
