import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#999"
        d="M10.397 9.02l7.374-7.519A.871.871 0 0016.53.282L9.166 7.79 1.502.27a.87.87 0 10-1.22 1.243l7.653 7.508-7.653 7.507a.871.871 0 001.22 1.243l7.664-7.52 7.363 7.508a.87.87 0 001.242-1.219l-7.374-7.52z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
