import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="#999"
        d="M5.02 0a5.02 5.02 0 013.05 9.006l.709 5.343c.069.52-.494.89-.945.62L5.02 13.281l-2.815 1.688a.627.627 0 01-.945-.62l.71-5.343A5.02 5.02 0 015.02 0zm0 10.04a5.006 5.006 0 01-1.874-.362l-.47 3.546 2.02-1.213a.627.627 0 01.646 0l2.022 1.213-.47-3.546a5.006 5.006 0 01-1.874.361zm0-8.785A3.765 3.765 0 107.033 8.2 3.754 3.754 0 008.784 5.02 3.765 3.765 0 005.02 1.255z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
