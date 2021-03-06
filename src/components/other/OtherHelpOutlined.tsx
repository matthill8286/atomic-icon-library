import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm.5-4h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm3.38-7A2.88 2.88 0 0013 6.12h-2A2.88 2.88 0 008.12 9v.5a.5.5 0 00.5.5h.76a.5.5 0 00.5-.5V9A1.12 1.12 0 0111 7.88h2A1.12 1.12 0 0114.12 9v.56a1.13 1.13 0 01-.76 1.07l-.95.31a1.88 1.88 0 00-1.29 1.78v.78a.5.5 0 00.5.5h.76a.5.5 0 00.5-.5v-.78a.13.13 0 01.12-.12l.95-.31a2.89 2.89 0 002-2.73z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
