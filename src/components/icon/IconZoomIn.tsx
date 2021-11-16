import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20.85 19.44l-4-4a2.44 2.44 0 00-.43-.35l-1-.69A7 7 0 1010 17a7 7 0 004.37-1.53l.75 1a2.6 2.6 0 00.3.36l4 4a.5.5 0 00.71 0l.7-.7a.5.5 0 00.02-.69zM10 15a5 5 0 115-5 5 5 0 01-5 5zm3-4.62v-.76a.5.5 0 00-.5-.5h-1.62V7.5a.5.5 0 00-.5-.5h-.76a.5.5 0 00-.5.5v1.62H7.5a.5.5 0 00-.5.5v.76a.5.5 0 00.5.5h1.62v1.62a.5.5 0 00.5.5h.76a.5.5 0 00.5-.5v-1.62h1.62a.5.5 0 00.5-.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
