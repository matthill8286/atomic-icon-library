import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21 3.92l-6 16.75a.5.5 0 01-.47.33h-.16a.51.51 0 01-.46-.29l-2.36-5a2 2 0 01.34-2.21l3-3.28a.5.5 0 000-.69l-.38-.38a.5.5 0 00-.69 0l-3.28 3a2 2 0 01-2.21.34l-5-2.36A.51.51 0 013 9.67v-.16A.5.5 0 013.33 9l16.75-6a.5.5 0 01.52.11l.26.26a.5.5 0 01.14.55z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
