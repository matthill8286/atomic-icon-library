import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20.86 3.4l-.26-.26a.5.5 0 00-.35-.14.47.47 0 00-.17 0L3.33 9a.5.5 0 00-.33.51v.16a.51.51 0 00.29.46l7.19 3.39 3.39 7.19a.51.51 0 00.46.29h.16a.5.5 0 00.47-.33L21 3.92a.5.5 0 00-.14-.52zm-6.63 13.38L13 14.12a2 2 0 01.34-2.21l1.56-1.69a.5.5 0 000-.69l-.38-.38a.5.5 0 00-.69 0l-1.69 1.56a2 2 0 01-2.26.29L7.22 9.77l10.93-3.92z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
