import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.7 3.044V7.5a.95.95 0 01-1.9 0V.75A.95.95 0 01.75-.2H7.5a.95.95 0 010 1.9H3.044L13.93 12.587a.95.95 0 11-1.343 1.343z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
