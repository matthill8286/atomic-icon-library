import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M28 16v-4c0-6.627-5.373-12-12-12S4 5.373 4 12v4a4 4 0 00-4 4v16a4 4 0 004 4h24a4 4 0 004-4V20a4 4 0 00-4-4zM8 12a8 8 0 1116 0v4H8v-4zm12 18a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
