import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm3.09-10.56l-.53-.53a.48.48 0 00-.7 0L12 10.76l-1.86-1.85a.48.48 0 00-.7 0l-.53.53a.48.48 0 000 .7L10.76 12l-1.85 1.86a.48.48 0 000 .7l.53.53a.48.48 0 00.7 0L12 13.24l1.86 1.85a.48.48 0 00.7 0l.53-.53a.48.48 0 000-.7L13.24 12l1.85-1.86a.48.48 0 000-.7z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
