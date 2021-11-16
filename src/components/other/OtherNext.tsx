import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M6.83 3.92a.5.5 0 010-.71l1.06-1.06a.48.48 0 01.7 0l9.19 9.19a.75.75 0 01.22.53v.26a.75.75 0 01-.22.53l-9.19 9.19a.48.48 0 01-.7 0l-1.06-1.06a.5.5 0 010-.71L14.91 12z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
