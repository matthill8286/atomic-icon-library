import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={30} height={30} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M38.5 12h-3.71a4.918 4.918 0 00.42-1.96 4.917 4.917 0 00-8.435-3.5L21.368 12h-.84l-3.71-3.762a3.832 3.832 0 00-4.288-.893 3.955 3.955 0 00-2.45 3.728c.008.312.049.623.123.927A3.5 3.5 0 007 15.5v21a3.5 3.5 0 003.5 3.5h28a3.5 3.5 0 003.5-3.5v-21a3.5 3.5 0 00-3.5-3.5zm-9.817-3.5a2.222 2.222 0 013.815 1.592A2.275 2.275 0 0131.308 12h-6.125l3.5-3.5zM13.475 9.9c.463-.146.969-.01 1.295.35L16.52 12h-3.5a1.26 1.26 0 01.455-2.1zM38.5 36.5h-28V26h28v10.5zm-3.703-7a.5.5 0 01.5.5v2.5a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5V30a.5.5 0 01.5-.5h6zm3.703-14v5.25h-28V15.5h28z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
