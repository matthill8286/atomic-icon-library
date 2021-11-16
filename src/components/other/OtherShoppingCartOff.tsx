import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M3.38 2.15a.48.48 0 00-.7 0l-.53.53a.48.48 0 000 .7L4.3 5.53l3.4 6a2.19 2.19 0 00.27.35l-1.86 3.7a.77.77 0 000 .71l.22.38A.76.76 0 007 17h8.76L17 18.26A2 2 0 1019.74 21l.88.88a.48.48 0 00.7 0l.53-.53a.48.48 0 000-.7zM8.62 15l1-2.09a2.74 2.74 0 00.64.09h1.46l2 2zM21.5 4H7.71l9 9A2.94 2.94 0 0019 11.49l2.35-4.13A4.76 4.76 0 0022 5v-.5a.5.5 0 00-.5-.5zM8 18a2 2 0 102 2 2 2 0 00-2-2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
