import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 12a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zm7.89 12.55L18 14.66A3 3 0 0015.26 13H8.74a3 3 0 00-2.69 1.66l-1.94 3.89A1 1 0 005 20h14a1 1 0 00.89-1.45zM6.62 18l1.22-2.45a1 1 0 01.9-.55h6.52a1 1 0 01.9.55L17.38 18z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
