import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M16.85 18.44a.48.48 0 010 .7l-.71.71a.5.5 0 01-.7 0L12 16.4l-3.44 3.45a.5.5 0 01-.71 0l-.7-.71a.48.48 0 010-.7l4.13-4.15a.75.75 0 01.53-.22h.38a.77.77 0 01.53.22zm-5.57-8.66a.77.77 0 00.53.22h.38a.75.75 0 00.53-.22l4.13-4.14a.5.5 0 000-.71l-.7-.71a.5.5 0 00-.71 0L12 7.67 8.56 4.23a.49.49 0 00-.7 0l-.71.71a.5.5 0 000 .71z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
