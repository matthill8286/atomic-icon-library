import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1.6 9a.25.25 0 01.21.12.25.25 0 010 .24l-.61 1.23a.76.76 0 01-.67.41H8.92A3.26 3.26 0 0012 15.25a3.21 3.21 0 002-.67.5.5 0 01.66.05l.53.54a.46.46 0 01.15.38.52.52 0 01-.19.36A5 5 0 017.1 13h-.6a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h.6a5 5 0 018-2.91.52.52 0 01.19.36.46.46 0 01-.15.38l-.53.54a.5.5 0 01-.66.05 3.21 3.21 0 00-2-.67A3.26 3.26 0 008.92 11z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
