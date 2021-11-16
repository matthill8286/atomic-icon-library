import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M7.15 8.07a.5.5 0 010-.71l4.13-4.14a.75.75 0 01.53-.22h.38a.77.77 0 01.53.22l4.13 4.14a.5.5 0 010 .71l-.71.71a.49.49 0 01-.7 0L12 5.33 8.56 8.78a.5.5 0 01-.71 0zm9 7.15a.5.5 0 00-.71 0L12 18.67l-3.44-3.44a.49.49 0 00-.7 0l-.71.71a.5.5 0 000 .71l4.13 4.14a.77.77 0 00.53.22h.38a.75.75 0 00.53-.22l4.13-4.14a.5.5 0 000-.71z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
