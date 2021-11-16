import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M16 19a1 1 0 01-1 1h-.59a1 1 0 01-.7-.29l-3.83-3.83A3 3 0 007.76 15 1.76 1.76 0 016 13.24v-2.48A1.76 1.76 0 017.76 9a3 3 0 002.12-.88l3.83-3.83a1 1 0 01.7-.29H15a1 1 0 011 1z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
