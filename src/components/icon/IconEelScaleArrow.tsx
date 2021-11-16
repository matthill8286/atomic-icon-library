import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 23 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.397 32a.8.8 0 01-.8-.8V5.328l-7.104 7.12a.8.8 0 01-1.136 0l-1.12-1.136a.8.8 0 010-1.136L10.045.352c.224-.225.53-.352.848-.352h.608c.317.004.62.13.848.352l9.808 9.824a.8.8 0 010 1.136l-1.136 1.136a.784.784 0 01-1.12 0l-7.104-7.12V31.2a.8.8 0 01-.8.8h-1.6z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
