import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M6.18 21.85a.47.47 0 00.35.15h.29a.47.47 0 00.35-.15L9 20a.51.51 0 01.71 0l1.81 1.81a.47.47 0 00.35.15h.29a.47.47 0 00.35-.15L14.32 20a.51.51 0 01.68 0l1.81 1.81a.47.47 0 00.35.15h.29a.47.47 0 00.35-.15L19.71 20a1 1 0 00.29-.7V3a1 1 0 00-1-1H5a1 1 0 00-1 1v16.26a1.05 1.05 0 00.29.71zM13 13.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h4a.5.5 0 01.5.5zm3-4a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h7a.5.5 0 01.5.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
