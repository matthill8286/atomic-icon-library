import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M16.5 3A6.36 6.36 0 0012 5.07 6.36 6.36 0 007.5 3 5.5 5.5 0 002 8.5c0 3.92 4.75 8.25 7 10.5l2.28 2.28a.75.75 0 00.53.22h.38a.75.75 0 00.53-.22L15 19c2.25-2.25 7-6.58 7-10.5A5.5 5.5 0 0016.5 3zm-2.3 14L12 19.17 9.8 17C7.77 15 4 11.26 4 8.5A3.5 3.5 0 017.5 5a5 5 0 013.71 2.21.77.77 0 00.6.29h.45a.51.51 0 00.4-.2A5.11 5.11 0 0116.47 5 3.5 3.5 0 0120 8.5c0 2.76-3.77 6.5-5.8 8.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
