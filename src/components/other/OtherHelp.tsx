import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 15.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1a.5.5 0 01.5.5zm2.88-7.94a2.89 2.89 0 01-2 2.73l-.88.31a.13.13 0 00-.08.12v.78a.5.5 0 01-.5.5h-.76a.5.5 0 01-.5-.5v-.78a1.88 1.88 0 011.29-1.78l.95-.31a1.13 1.13 0 00.76-1.07V9A1.12 1.12 0 0013 7.88h-2A1.12 1.12 0 009.88 9v.5a.5.5 0 01-.5.5h-.76a.5.5 0 01-.5-.5V9A2.88 2.88 0 0111 6.12h2A2.88 2.88 0 0115.88 9z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
