import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#999" fillRule="nonzero" d="M8.825.842L5 4.658 1.175.842 0 2.017l5 5 5-5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
