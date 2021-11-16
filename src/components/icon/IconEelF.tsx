import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={44} width={63} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M47 .055L62.625 21.93 47 43.805H3.25c-.879 0-1.62-.301-2.222-.904C.426 42.3.125 41.56.125 40.68V3.18c0-.847.301-1.58.903-2.198C1.631.364 2.371.055 3.25.055zM30.3 15.68l.147-4.785H20.291V31.5h5.371v-6.64h4.492v-4.688h-4.492V15.68z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
