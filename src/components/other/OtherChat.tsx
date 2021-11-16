import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M15 16a4 4 0 004-4V6a4 4 0 00-4-4H5a4 4 0 00-4 4v12.5a.5.5 0 00.5.5.49.49 0 00.35-.15l2-2A3 3 0 016 16zm6-10v8a4 4 0 01-4 4H5a2 2 0 002 2h11a3 3 0 012.13.88l2 2a.49.49 0 00.35.15.5.5 0 00.5-.5V8A2 2 0 0021 6z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
