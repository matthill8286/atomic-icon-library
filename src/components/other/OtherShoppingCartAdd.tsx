import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20 20a2 2 0 11-2-2 2 2 0 012 2zM8 18a2 2 0 102 2 2 2 0 00-2-2zM21.5 4h-1a.5.5 0 00-.5.5V5a2.86 2.86 0 01-.36 1.37l-2.36 4.13a1 1 0 01-.75.5H10.3a1 1 0 01-.86-.5L5.16 3a2 2 0 00-1.74-1H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h.92l4.28 7.49a2.19 2.19 0 00.27.35l-1.86 3.7a.77.77 0 000 .71l.22.38A.76.76 0 007 17h12.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H8.62l1-2.09a2.74 2.74 0 00.64.09h6.23A2.94 2.94 0 0019 11.49l2.35-4.13A4.76 4.76 0 0022 5v-.5a.5.5 0 00-.5-.5zM16 5.38v-.76a.5.5 0 00-.5-.5h-1.62V2.5a.5.5 0 00-.5-.5h-.76a.5.5 0 00-.5.5v1.62H10.5a.5.5 0 00-.5.5v.76a.5.5 0 00.5.5h1.62V7.5a.5.5 0 00.5.5h.76a.5.5 0 00.5-.5V5.88h1.62a.5.5 0 00.5-.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
