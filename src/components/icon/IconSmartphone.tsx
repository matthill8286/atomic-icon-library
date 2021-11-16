import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={15}
      height={24}
      viewBox="0 0 31 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.545 0H24a6.545 6.545 0 016.546 6.545v34.91A6.545 6.545 0 0124 48H6.545A6.545 6.545 0 010 41.455V6.545A6.545 6.545 0 016.545 0zm0 43.636H24a2.182 2.182 0 002.182-2.181V6.545a2.182 2.182 0 10-4.364 0 2.182 2.182 0 01-2.182 2.182H10.91a2.182 2.182 0 01-2.182-2.182 2.182 2.182 0 00-4.363 0v34.91c0 1.205.976 2.181 2.181 2.181z"
        fill="#000"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
