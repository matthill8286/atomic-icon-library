import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={28} {...props}>
      <path fill="#666" fillRule="evenodd" d="M36 4H0V0h36v4zm0 8H0v4h36v-4zm0 16v-4H0v4h36z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
