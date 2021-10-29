import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 13.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
