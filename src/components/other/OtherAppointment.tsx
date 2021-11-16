import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19 4h-1V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V4H8V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V4H5a2 2 0 00-2 2v13a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 15H5V8h14zm-8.41-3.15a.48.48 0 00.7 0l4.25-4.24a.51.51 0 000-.71l-.54-.53a.51.51 0 00-.71 0l-3.36 3.36-1.23-1.24a.51.51 0 00-.71 0l-.53.51a.5.5 0 000 .7z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
