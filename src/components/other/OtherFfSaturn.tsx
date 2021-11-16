import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 117 400" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#FFF" d="M50 0l63 126L0 400V0z" fillRule="evenodd" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
