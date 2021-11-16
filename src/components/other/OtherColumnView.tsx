import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M22 18V6a2 2 0 00-2-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2zM9 20H4a2 2 0 01-2-2V6a2 2 0 012-2h5a2 2 0 012 2v12a2 2 0 01-2 2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
