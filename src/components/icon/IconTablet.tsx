import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 39 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8 0h28.8a4.8 4.8 0 014.8 4.8v38.4a4.8 4.8 0 01-4.8 4.8H4.8A4.8 4.8 0 010 43.2V4.8A4.8 4.8 0 014.8 0zm0 40.8h28.8v-36H4.8v36z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
