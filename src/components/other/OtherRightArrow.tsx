import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={306} height={306} {...props}>
      <path d="M94.35 0l-35.7 35.7L175.95 153 58.65 270.3l35.7 35.7 153-153z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
