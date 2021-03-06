import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M14.64 21.86l-3-3A.5.5 0 0112 18h2v-7.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V18h2a.5.5 0 01.36.85l-3 3a.51.51 0 01-.72.01zM10 13.5V6h2a.5.5 0 00.36-.85l-3-3a.51.51 0 00-.71 0l-3 3A.5.5 0 006 6h2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
