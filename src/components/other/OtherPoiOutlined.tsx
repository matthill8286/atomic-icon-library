import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M14 10a2 2 0 11-2-2 2 2 0 012 2zm-2-6a6 6 0 00-6 6c0 2.8 1.18 3.74 2.82 5A9.17 9.17 0 0112 18.73 9.25 9.25 0 0115.18 15c1.64-1.26 2.82-2.2 2.82-5a6 6 0 00-6-6m0-2a8 8 0 018 8c0 6.22-5.05 6.17-6.26 9.78l-.51 1.54a1 1 0 01-1 .68h-.56a1 1 0 01-1-.68l-.51-1.54C9.05 16.17 4 16.22 4 10a8 8 0 018-8z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
