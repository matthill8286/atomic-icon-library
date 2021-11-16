import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M48 32v10.667A5.333 5.333 0 0142.667 48h-5.334a2.667 2.667 0 01-2.666-2.667v-16a2.667 2.667 0 012.666-2.666v-8c0-7.364-5.97-13.334-13.333-13.334-7.364 0-13.333 5.97-13.333 13.334v8a2.667 2.667 0 012.666 2.666v16A2.667 2.667 0 0110.667 48H5.333A5.333 5.333 0 010 42.667V32a5.333 5.333 0 015.333-5.333v-8C5.333 8.357 13.691 0 24 0c10.31 0 18.667 8.357 18.667 18.667v8A5.333 5.333 0 0148 32z"
        fill="#000"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
