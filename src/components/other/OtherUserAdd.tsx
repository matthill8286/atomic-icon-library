import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M16.89 18.55A1 1 0 0116 20H2a1 1 0 01-.89-1.45l1.44-2.89A3 3 0 015.24 14h7.52a3 3 0 012.69 1.66zM9 12a4 4 0 10-4-4 4 4 0 004 4zm13.5-2H20V7.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V10h-2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H18v2.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V12h2.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
