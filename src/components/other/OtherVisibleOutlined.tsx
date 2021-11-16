import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M22 11.7A10.65 10.65 0 0012 5a10.65 10.65 0 00-9.94 6.67A1 1 0 002 12a.81.81 0 00.06.31A10.65 10.65 0 0012 19a10.65 10.65 0 009.94-6.67A.81.81 0 0022 12a.93.93 0 000-.3zM12 17a8.82 8.82 0 01-7.93-5 8.79 8.79 0 0115.86 0A8.82 8.82 0 0112 17zm0-8a3 3 0 103 3 3 3 0 00-3-3z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
