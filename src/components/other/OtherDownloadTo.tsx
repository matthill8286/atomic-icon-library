import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19 18.5v1a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h13a.5.5 0 01.5.5zm-7.35-2.65a.48.48 0 00.7 0l5.79-5.79a.5.5 0 000-.71l-.2-.2a.49.49 0 00-.36-.15H15V3.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V9H6.42a.49.49 0 00-.36.15l-.2.2a.5.5 0 000 .71z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
