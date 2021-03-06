import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.556 35C10.383 35 7 31.418 7 27V15c0-4.418 3.383-8 7.556-8h18.888C37.617 7 41 10.582 41 15v25c0 .552-.423 1-.944 1a.902.902 0 01-.662-.3l-3.777-4c-1.085-1.118-2.548-1.73-4.061-1.7h-17zm0-24.222c-2.087 0-3.778 1.845-3.778 4.121v12.364c0 2.276 1.691 4.12 3.778 4.12h17c2.043 0 4.031.724 5.666 2.061V14.9c0-2.276-1.691-4.121-3.778-4.121H14.556zm2.833 8.5a1.889 1.889 0 110 3.778 1.889 1.889 0 010-3.778zm6.611 0a1.889 1.889 0 110 3.778 1.889 1.889 0 010-3.778zm6.611 0a1.889 1.889 0 110 3.778 1.889 1.889 0 010-3.778z"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
