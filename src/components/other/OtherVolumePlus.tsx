import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M13 5v14a1 1 0 01-1 1h-.59a1 1 0 01-.7-.29l-3.83-3.83A3 3 0 004.76 15 1.76 1.76 0 013 13.24v-2.48A1.76 1.76 0 014.76 9a3 3 0 002.12-.88l3.83-3.83a1 1 0 01.7-.29H12a1 1 0 011 1zm7.5 6.12h-1.62V9.5a.5.5 0 00-.5-.5h-.76a.5.5 0 00-.5.5v1.62H15.5a.5.5 0 00-.5.5v.76a.5.5 0 00.5.5h1.62v1.62a.5.5 0 00.5.5h.76a.5.5 0 00.5-.5v-1.62h1.62a.5.5 0 00.5-.5v-.76a.5.5 0 00-.5-.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
