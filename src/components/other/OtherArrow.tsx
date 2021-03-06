import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M15.78 11.28a.75.75 0 01.22.53v.38a.77.77 0 01-.22.53l-5.14 5.13a.5.5 0 01-.71 0l-.71-.71a.49.49 0 010-.7L13.67 12 9.22 7.56a.5.5 0 010-.71l.71-.7a.5.5 0 01.71 0z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
