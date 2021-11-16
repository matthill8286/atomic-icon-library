import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path d="M19.479 2L12 14.543v5.924l-1-.6v-5.324L3.521 2h15.958zM23 0H0l9 15.094V21l5 3v-8.906L23 0z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
