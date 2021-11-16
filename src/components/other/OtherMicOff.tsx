import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M20.85 20.32l-.53.53a.48.48 0 01-.7 0L15.79 17a7.82 7.82 0 01-2.79.9V20h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11v-2.07a8.06 8.06 0 01-6-4.07.56.56 0 010-.4.53.53 0 01.27-.3l.9-.42a.49.49 0 01.65.2 6 6 0 007.52 2.59l-1.6-1.6A3.84 3.84 0 0112 14a4 4 0 01-4-4v-.76L3.15 4.38a.48.48 0 010-.7l.53-.53a.48.48 0 01.7 0l16.47 16.47a.48.48 0 010 .7zM16 10V6a4 4 0 00-4-4 4 4 0 00-3.72 2.57l7.27 7.27A3.94 3.94 0 0016 10zm3 3.86a.56.56 0 000-.4.53.53 0 00-.27-.3l-.9-.42a.49.49 0 00-.65.2c-.07.12-.14.24-.22.36l1.43 1.43a7.24 7.24 0 00.61-.87z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
