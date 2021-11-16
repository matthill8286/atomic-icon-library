import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M9.85 8.44a.5.5 0 010 .71l-.7.7a.5.5 0 01-.71 0L5.28 6.68 3.86 8.1A.5.5 0 013 7.75V3.5a.52.52 0 01.5-.5h4.25a.5.5 0 01.36.85L6.69 5.27zm-.7 5.71a.5.5 0 00-.71 0l-3.17 3.16-1.42-1.42a.5.5 0 00-.85.36v4.25a.52.52 0 00.5.5h4.25a.5.5 0 00.35-.85l-1.42-1.43 3.17-3.16a.5.5 0 000-.71zm11 1.75l-1.42 1.42-3.16-3.17a.5.5 0 00-.71 0l-.7.7a.5.5 0 000 .71l3.16 3.17-1.42 1.42a.5.5 0 00.36.85h4.24a.52.52 0 00.5-.5v-4.25a.5.5 0 00-.86-.35zM20.5 3h-4.25a.5.5 0 00-.35.85l1.42 1.42-3.17 3.17a.5.5 0 000 .71l.7.7a.5.5 0 00.71 0l3.17-3.16 1.42 1.42a.5.5 0 00.85-.36V3.5a.52.52 0 00-.5-.5z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
