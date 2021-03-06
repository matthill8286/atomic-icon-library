import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.85 12.64l-3.13 3.14a.75.75 0 01-.53.22h-.38a.77.77 0 01-.53-.22l-3.13-3.14a.5.5 0 010-.71l.71-.71a.49.49 0 01.7 0L11 14.67V6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v8.17l1.44-1.45a.5.5 0 01.71 0l.7.71a.5.5 0 010 .71z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
