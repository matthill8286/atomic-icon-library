import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21.71 10.71l-7.42-7.42a1 1 0 00-.7-.29h-3.18a1 1 0 00-.7.29l-7.42 7.42a1 1 0 00-.29.7v1.09a.5.5 0 00.5.5H4v7a1 1 0 001 1h5a1 1 0 001-1v-4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25V20a1 1 0 001 1h5a1 1 0 001-1v-7h1.5a.5.5 0 00.5-.5v-1.09a1 1 0 00-.29-.7zM18 19h-3v-5a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H6V9.83L10.83 5h2.34L18 9.83z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
