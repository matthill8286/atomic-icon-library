import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M22 9a5 5 0 00-5-5 4.94 4.94 0 00-3 1H4a2 2 0 00-2 2v11a2 2 0 002 2h15a2 2 0 002-2v-6a4.94 4.94 0 001-3zm-7.5.88a.5.5 0 01-.5-.5v-.76a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v.76a.5.5 0 01-.5.5zM4 7h8.42A4.94 4.94 0 0012 9a5.47 5.47 0 00.1 1H4zm0 11v-5h10a4.93 4.93 0 005 .58V18z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
