import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M16.81 10a.5.5 0 010 .7l-8.06 8.09a2 2 0 01-.68.45L3.73 21a.5.5 0 01-.54-.11.5.5 0 01-.19-.62l1.72-4.34a2 2 0 01.45-.68l8.07-8.07a.5.5 0 01.71 0zm3.75-5.9l-.66-.66A1.5 1.5 0 0018.84 3h-.76a1.5 1.5 0 00-1.08.44l-1.81 1.83a.5.5 0 000 .7L18 8.82a.5.5 0 00.71 0L20.56 7A1.5 1.5 0 0021 5.92v-.76a1.5 1.5 0 00-.44-1.06z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
