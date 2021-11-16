import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M5 8l.87 12.14a2 2 0 002 1.86h8.28a2 2 0 002-1.86L19 8zm11 7.5a.5.5 0 01-.5.5H13v2.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V16H8.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11v-2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V14h2.5a.5.5 0 01.5.5zM19.5 4H15V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1H4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
