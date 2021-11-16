import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M15 5v14a1 1 0 01-1 1h-.59a1 1 0 01-.7-.29l-3.83-3.83A3 3 0 006.76 15 1.76 1.76 0 015 13.24v-2.48A1.76 1.76 0 016.76 9a3 3 0 002.12-.88l3.83-3.83a1 1 0 01.7-.29H14a1 1 0 011 1zm3.2 4.6a.54.54 0 00-.36-.2.51.51 0 00-.39.15l-.72.72a.5.5 0 00-.06.63 2 2 0 010 2.2.5.5 0 00.06.63l.72.72a.51.51 0 00.75 0 4 4 0 000-4.8z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
