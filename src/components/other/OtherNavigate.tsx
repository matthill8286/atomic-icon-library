import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19 19.93a.51.51 0 01-.12.54l-.38.38a.49.49 0 01-.68 0 8.43 8.43 0 00-11.58 0 .49.49 0 01-.68 0l-.38-.38a.51.51 0 01-.18-.54l6.38-16.61a.51.51 0 01.47-.32h.3a.51.51 0 01.47.32z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
