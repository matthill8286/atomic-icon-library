import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 6h4a1 1 0 001-1V1a1 1 0 00-1-1H1a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2v2H2V2zM.5 10h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5zM5 12H1a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zm-1 4H2v-2h2v2zm10.5 2h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V16h-2v1.5a.5.5 0 00.5.5zM17 0h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V1a1 1 0 00-1-1zm-1 4h-2V2h2v2zM4.5 8a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H8V8H4.5zM8 11.5a.5.5 0 00.5.5H10v1.5a.5.5 0 00.5.5H12v-4H8v1.5zm0 5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V16H8.5a.5.5 0 00-.5.5zM17.5 8h-5a.5.5 0 00-.5.5V10h2v1.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V10h1.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM14 16v-2h-2v2h2zM8.5 4h1a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v3a.5.5 0 00.5.5zM10 7.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V8h1.5a.5.5 0 00.5-.5z"
        fill="#333"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
