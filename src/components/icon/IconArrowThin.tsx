import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={80} width={80} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 79.367h4.087l28.345-39.683L28.087 0H24l22.676 39.684z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
