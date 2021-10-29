import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={80} width={80} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M76.875 12.25l-29 29 29 29-7.375 7.375-29-29-29 29-7.375-7.375 29-29-29-29L11.5 4.875l29 29 29-29z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
