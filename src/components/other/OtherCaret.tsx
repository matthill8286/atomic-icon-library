import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M11.06 16.14a.5.5 0 01-.71 0l-.2-.2a.49.49 0 01-.15-.36V8.42a.49.49 0 01.15-.36l.2-.2a.5.5 0 01.71 0l3.79 3.79a.48.48 0 010 .7z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
