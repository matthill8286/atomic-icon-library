import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#999"
        d="M7.822 0a7.822 7.822 0 110 15.644A7.822 7.822 0 017.822 0zm0 1.422a6.4 6.4 0 100 12.8 6.4 6.4 0 000-12.8zm0 1.422c.393 0 .711.319.711.712v3.972l1.925 1.925a.711.711 0 11-1.005 1.005L7.319 8.325a.711.711 0 01-.208-.503V3.556c0-.393.318-.712.711-.712z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
