import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 19a1 1 0 100-2 1 1 0 000 2zm5 0a1 1 0 100-2 1 1 0 000 2zm0-4a1 1 0 100-2 1 1 0 000 2zm-5 0a1 1 0 100-2 1 1 0 000 2zm7-12h-1V2a1 1 0 00-2 0v1H8V2a1 1 0 00-2 0v1H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V6a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1v-9h16v9zm0-11H4V6a1 1 0 011-1h1v1a1 1 0 002 0V5h8v1a1 1 0 002 0V5h1a1 1 0 011 1v3zM7 15a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z"
        fill="#999"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
