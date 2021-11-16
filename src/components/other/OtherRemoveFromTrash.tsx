import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M5 8l.87 12.14a2 2 0 002 1.86h8.28a2 2 0 002-1.86L19 8zm10.09 8.86a.48.48 0 010 .7l-.53.53a.48.48 0 01-.7 0L12 16.24l-1.86 1.85a.48.48 0 01-.7 0l-.53-.53a.48.48 0 010-.7L10.76 15l-1.85-1.86a.48.48 0 010-.7l.53-.53a.48.48 0 01.7 0L12 13.76l1.86-1.85a.48.48 0 01.7 0l.53.53a.48.48 0 010 .7L13.24 15zM19.5 4H15V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1H4.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
