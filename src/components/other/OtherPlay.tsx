import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M18 11.86v.28a.76.76 0 01-.37.65L8.68 18c-.54.32-.82.32-1.06.18l-.25-.14a.76.76 0 01-.37-.63V6.59a.76.76 0 01.37-.65l.25-.14c.24-.14.52-.14 1.22.27l8.79 5.14a.76.76 0 01.37.65z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
