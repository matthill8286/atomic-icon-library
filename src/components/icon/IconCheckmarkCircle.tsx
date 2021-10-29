import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4.35 7.73l-5.62 5.62a.48.48 0 01-.7 0L7.65 13a.5.5 0 010-.71l.53-.53a.48.48 0 01.7 0l1.5 1.49 4.74-4.74a.5.5 0 01.7 0l.53.53a.5.5 0 010 .69z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
