import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 40a4 4 0 004 4h24a4 4 0 004-4V8a4 4 0 00-4-4H21.66a4 4 0 00-2.84 1.18l-9.64 9.64A4 4 0 008 17.66zm18-5a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h10a1 1 0 011 1zm8-8a1 1 0 01-1 1H15a1 1 0 01-1-1v-2a1 1 0 011-1h18a1 1 0 011 1zm-22.36-9L22 7.64V16a2 2 0 01-2 2z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
