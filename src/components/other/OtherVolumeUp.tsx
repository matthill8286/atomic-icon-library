import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M13 5v14a1 1 0 01-1 1h-.59a1 1 0 01-.7-.29l-3.83-3.83A3 3 0 004.76 15 1.76 1.76 0 013 13.24v-2.48A1.76 1.76 0 014.76 9a3 3 0 002.12-.88l3.83-3.83a1 1 0 01.7-.29H12a1 1 0 011 1zm6 1.73a.58.58 0 00-.36-.17.5.5 0 00-.37.15l-.71.71a.5.5 0 000 .68 6 6 0 010 7.8.5.5 0 000 .68l.71.71a.5.5 0 00.37.15.56.56 0 00.36-.17 8 8 0 000-10.54zM15.84 9.4a.53.53 0 00-.39.15l-.71.72a.5.5 0 00-.07.63 2 2 0 010 2.2.5.5 0 00.07.63l.71.72a.52.52 0 00.39.14.52.52 0 00.37-.19 4 4 0 000-4.8.57.57 0 00-.37-.2z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
