import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20.73 7.12l-.14-.25a2.07 2.07 0 00-.74-.73l-6.71-3.87a2 2 0 00-1-.27h-.29a2 2 0 00-1 .27L4.14 6.15a2 2 0 00-.73.73l-.14.25a2 2 0 00-.27 1v7.75a2 2 0 00.27 1l.14.25a2.13 2.13 0 00.73.73l6.72 3.87a1.92 1.92 0 001 .27h.28a2 2 0 001-.27l6.71-3.88a1.9 1.9 0 00.73-.73l.15-.25a2.05 2.05 0 00.27-1V8.12a2 2 0 00-.27-1zM11.85 4h.29L18 7.38l-6 3.46-6-3.46zm7 12.12L13 19.5v-6.92l6-3.47v6.76z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
