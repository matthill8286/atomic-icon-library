import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#999"
        d="M9.223.209l5.334 2.667a2 2 0 011.11 1.79v6.354a2 2 0 01-1.109 1.789l-5.333 2.666a2 2 0 01-1.79 0L2.1 12.809A1.998 1.998 0 011 11.013V4.666a2 2 0 011.109-1.79L7.443.21a2 2 0 011.78 0zm-6.89 4.709v6.1a.666.666 0 00.365.598L7.666 14.1V7.584L2.333 4.918zm12-.001L9 7.584v6.513l4.963-2.481a.667.667 0 00.37-.597V4.917zM8.038 1.402L3.16 3.84l5.173 2.587 5.173-2.587-4.877-2.437a.666.666 0 00-.59 0z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
