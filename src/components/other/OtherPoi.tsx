import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a8 8 0 00-8 8c0 6.22 5.05 6.17 6.26 9.78l.51 1.54a1 1 0 001 .68h.56a1 1 0 001-.68l.51-1.54C15 16.17 20 16.22 20 10a8 8 0 00-8-8zm0 11a3 3 0 113-3 3 3 0 01-3 3z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
