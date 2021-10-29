import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={56} height={8} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle fill="#979797" cx={4} cy={4} r={4} />
        <circle fill="#CCC" cx={20} cy={4} r={4} />
        <circle fill="#CCC" cx={36} cy={4} r={4} />
        <circle fill="#CCC" cx={52} cy={4} r={4} />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
