import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={76} height={76} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={38} cy={38} r={38} fill="#000" fillOpacity={0.5} />
      <path
        d="M55 40.964L31.75 54.388c-2.667 1.54-6-.385-6-3.465V24.077c0-3.08 3.333-5.004 6-3.465L55 34.037c2.667 1.54 2.667 5.389 0 6.928z"
        stroke="#fff"
        strokeWidth={2}
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
