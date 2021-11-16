import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M8 8a4 4 0 114 4 4 4 0 01-4-4zm11.89 10.55l-1.44-2.89A3 3 0 0015.76 14H8.24a3 3 0 00-2.69 1.66l-1.44 2.89A1 1 0 005 20h14a1 1 0 00.89-1.45z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
