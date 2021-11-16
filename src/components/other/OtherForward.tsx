import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 5V2.71a.49.49 0 01.15-.36l.2-.2a.5.5 0 01.71 0l3.54 3.53a.51.51 0 010 .71l-3.54 3.53a.5.5 0 01-.71 0l-.2-.2a.49.49 0 01-.15-.36V7a6 6 0 106 6.46.5.5 0 01.5-.46h1a.52.52 0 01.37.16.51.51 0 01.13.37A8 8 0 1112 5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
