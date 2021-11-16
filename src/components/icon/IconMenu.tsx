import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.726 9.507c-2.66 0-4.56 2.279-4.56 4.938s2.28 4.56 4.94 4.56h70.283c2.66 0 4.56-1.9 4.56-4.56s-1.9-4.938-4.56-4.938H4.726zm0 25.834c-2.66 0-4.56 1.9-4.56 4.559s2.28 4.559 4.94 4.559h70.283c2.66 0 4.56-1.9 4.56-4.56s-1.9-4.558-4.56-4.558H4.726zm0 25.454c-2.66 0-4.94 2.28-4.94 4.939s2.28 4.559 4.94 4.559H75.01c2.659 0 4.938-2.28 4.938-4.94s-2.28-4.938-4.938-4.938H4.726v.38z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
