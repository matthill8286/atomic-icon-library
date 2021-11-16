import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M14 14c-4.72 0-9.5 2-10 4.59a.5.5 0 01-.49.41h-.1a.46.46 0 01-.32-.13.5.5 0 01-.09-.33A11.22 11.22 0 0114 8V5.42a.49.49 0 01.15-.36l.2-.2a.5.5 0 01.71 0l5.79 5.79a.48.48 0 010 .7l-5.79 5.79a.5.5 0 01-.71 0l-.2-.2a.49.49 0 01-.15-.36z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
