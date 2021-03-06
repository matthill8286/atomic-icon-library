import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21.71 10.71l-7.42-7.42a1 1 0 00-.7-.29h-3.18a1 1 0 00-.7.29l-7.42 7.42a1 1 0 00-.29.7v1.09a.5.5 0 00.5.5H4v7a1 1 0 001 1h3a1 1 0 001-1v-5.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V20a1 1 0 001 1h3a1 1 0 001-1v-7h1.5a.5.5 0 00.5-.5v-1.09a1 1 0 00-.29-.7z" />
      <path d="M21.71 10.71l-7.42-7.42a1 1 0 00-.7-.29h-3.18a1 1 0 00-.7.29l-7.42 7.42a1 1 0 00-.29.7v1.09a.5.5 0 00.5.5H4v7a1 1 0 001 1h3a1 1 0 001-1v-5.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V20a1 1 0 001 1h3a1 1 0 001-1v-7h1.5a.5.5 0 00.5-.5v-1.09a1 1 0 00-.29-.7z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
