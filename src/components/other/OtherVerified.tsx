import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21.61 13.16a3.2 3.2 0 010-2.32l.17-.46a3.27 3.27 0 00-1.71-4.15L19.62 6A3.31 3.31 0 0118 4.38l-.2-.45a3.27 3.27 0 00-4.15-1.71l-.46.17a3.2 3.2 0 01-2.32 0l-.46-.17a3.27 3.27 0 00-4.18 1.71L6 4.38A3.31 3.31 0 014.38 6l-.45.2a3.27 3.27 0 00-1.71 4.15l.17.46a3.2 3.2 0 010 2.32l-.17.46a3.27 3.27 0 001.71 4.15l.45.2A3.31 3.31 0 016 19.62l.2.45a3.27 3.27 0 004.15 1.71l.46-.17a3.2 3.2 0 012.32 0l.46.17a3.27 3.27 0 004.15-1.71l.2-.45A3.31 3.31 0 0119.62 18l.45-.2a3.27 3.27 0 001.71-4.15zm-5.26-3.43l-5.62 5.62a.48.48 0 01-.7 0L7.65 13a.5.5 0 010-.71l.53-.53a.48.48 0 01.7 0l1.5 1.49 4.74-4.74a.5.5 0 01.7 0l.53.53a.5.5 0 010 .69z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
