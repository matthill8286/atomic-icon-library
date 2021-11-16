import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.09 11.86a.48.48 0 010 .7l-.53.53a.48.48 0 01-.7 0L12 13.24l-1.86 1.85a.48.48 0 01-.7 0l-.53-.53a.48.48 0 010-.7L10.76 12l-1.85-1.86a.48.48 0 010-.7l.53-.53a.48.48 0 01.7 0L12 10.76l1.86-1.85a.48.48 0 01.7 0l.53.53a.48.48 0 010 .7L13.24 12z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
