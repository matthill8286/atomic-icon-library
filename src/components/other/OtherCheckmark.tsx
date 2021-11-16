import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M25.862 56.46L72.38 7 80 15.084 25.863 72.516 0 45.079l7.502-8.095z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
