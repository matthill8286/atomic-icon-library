import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21 6a2 2 0 00-2-2h-1V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V4H8V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V4H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2zm-2 13H5V8h14zm-5.76-6l1.61-1.62a.48.48 0 000-.7l-.53-.53a.48.48 0 00-.7 0L12 11.76l-1.62-1.61a.48.48 0 00-.7 0l-.53.53a.48.48 0 000 .7L10.76 13l-1.61 1.62a.48.48 0 000 .7l.53.53a.48.48 0 00.7 0L12 14.24l1.62 1.61a.48.48 0 00.7 0l.53-.53a.48.48 0 000-.7z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
