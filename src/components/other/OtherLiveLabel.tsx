import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={62} height={23} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0.5} y={0.5} width={61} height={22} rx={4.5} fill="url(#paint0_linear)" />
      <circle cx={13} cy={11.5} r={4} fill="#fff" />
      <path
        d="M27.912 15V6.54h1.548v7.188h3.948V15h-5.496zm6.656 0V6.54h1.548V15h-1.548zm9.58-8.46h1.571L41.951 15h-1.26l-3.768-8.46h1.596l2.808 6.54 2.82-6.54zM46.51 15V6.54h5.664v1.224h-4.152v2.328h3.912v1.212h-3.912v2.472h4.152V15H46.51z"
        fill="#fff"
      />
      <rect x={0.5} y={0.5} width={61} height={22} rx={4.5} stroke="#fff" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1={0}
          y1={0}
          x2={57.761}
          y2={24.727}
          gradientUnits="userSpaceOnUse">
          <stop offset={0.345} stopColor="#FF5F68" />
          <stop offset={1} stopColor="#F4915A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
