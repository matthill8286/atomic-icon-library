import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M17.85 16.44a.5.5 0 010 .71l-.7.7a.5.5 0 01-.71 0L12 13.41l-4.44 4.44a.5.5 0 01-.71 0l-.7-.7a.5.5 0 010-.71L10.59 12 6.15 7.56a.5.5 0 010-.71l.7-.7a.5.5 0 01.71 0L12 10.59l4.44-4.44a.5.5 0 01.71 0l.7.7a.5.5 0 010 .71L13.41 12z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
