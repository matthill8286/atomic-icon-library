import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19.85 7.25l-10.6 10.6a.5.5 0 01-.71 0l-5.39-5.39a.5.5 0 010-.71l.7-.7a.5.5 0 01.71 0l4.33 4.33 9.55-9.55a.51.51 0 01.71 0l.7.71a.5.5 0 010 .71z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
