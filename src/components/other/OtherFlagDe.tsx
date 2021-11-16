import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="194.5 696.5 300 180" {...props}>
      <switch>
        <g>
          <path d="M194.5 696.5h300v180h-300z" />
          <path fill="#D00" d="M194.5 756.5h300v120h-300z" />
          <path fill="#FFCE00" d="M194.5 816.5h300v60h-300z" />
        </g>
      </switch>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
