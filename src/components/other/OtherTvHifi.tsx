import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={103}
      height={24}
      viewBox="0 0 107 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78 0h24a4.8 4.8 0 014.8 4.8v38.4A4.8 4.8 0 01102 48H78a4.8 4.8 0 01-4.8-4.8V4.8A4.8 4.8 0 0178 0zm16.8 9.6a4.8 4.8 0 10-9.6 0 4.8 4.8 0 009.6 0zM90 43.2c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm-4.8-12a4.8 4.8 0 119.6 0 4.8 4.8 0 01-9.6 0zM2.667 0h58.666A2.667 2.667 0 0164 2.667V40a2.667 2.667 0 01-2.667 2.667h-16v4c0 .736-.597 1.333-1.333 1.333H20a1.333 1.333 0 01-1.333-1.333v-4h-16A2.667 2.667 0 010 40V2.667A2.667 2.667 0 012.667 0zm2.666 37.333h53.334v-32H5.333v32z"
        fill="#000"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
