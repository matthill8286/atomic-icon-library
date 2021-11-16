import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm3.82-11.51a.5.5 0 00-.7 0l-4.74 4.74-1.5-1.49a.48.48 0 00-.7 0l-.53.53a.5.5 0 000 .71L10 15.35a.48.48 0 00.7 0l5.62-5.62a.5.5 0 000-.71z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
