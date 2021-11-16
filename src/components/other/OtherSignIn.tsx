import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M17 12.19v-.38a.77.77 0 00-.22-.53l-5.14-5.13a.5.5 0 00-.71 0l-.71.71a.49.49 0 000 .7L13.67 11H3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h10.17l-3.45 3.44a.5.5 0 000 .71l.71.7a.5.5 0 00.71 0l5.14-5.13a.75.75 0 00.22-.53zM14.67 12zM19 3h-5.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H19v14h-5.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H19a2 2 0 002-2V5a2 2 0 00-2-2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
