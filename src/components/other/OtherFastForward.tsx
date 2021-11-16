import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M11.66 11.08a.75.75 0 01.32.61v.62a.75.75 0 01-.32.61L4.29 18.1a.75.75 0 01-.8 0l-.12-.06a.77.77 0 01-.37-.62V6.57a.76.76 0 01.37-.65l.12-.06a.73.73 0 01.8 0zm10 0L14.29 5.9a.73.73 0 00-.8 0l-.12.06a.76.76 0 00-.37.65v10.81a.77.77 0 00.37.65l.12.06a.75.75 0 00.8 0l7.37-5.18a.75.75 0 00.32-.61v-.62a.75.75 0 00-.32-.64z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
