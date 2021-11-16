import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm.88-8.36V6.5a.5.5 0 00-.5-.5h-.76a.5.5 0 00-.5.5v5.66a.53.53 0 00.15.35l4 4a.51.51 0 00.71 0l.53-.53a.51.51 0 000-.71z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
