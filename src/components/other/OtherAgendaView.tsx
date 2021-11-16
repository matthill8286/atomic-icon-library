import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M18 2H6a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm2 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2h12a2 2 0 012 2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
