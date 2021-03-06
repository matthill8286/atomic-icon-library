import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19 11.5v1a.5.5 0 01-.5.5H13v5.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V13H5.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11V5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V11h5.5a.5.5 0 01.5.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
