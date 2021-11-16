import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}>
      <path d="M23 0l-9 14.146v7.73L10.004 24v-9.853L1 0h22zM2.751 1l8.253 12.853v8.491L13 21.273v-7.419L21.229 1H2.751z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
