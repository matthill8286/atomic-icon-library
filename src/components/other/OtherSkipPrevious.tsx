import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M8 17.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5zM18 6.57a.77.77 0 00-.37-.65l-.12-.06a.73.73 0 00-.8 0l-7.37 5.21a.75.75 0 00-.32.61v.62a.75.75 0 00.32.61l7.37 5.18a.73.73 0 00.8 0l.12-.06a.76.76 0 00.37-.65z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
