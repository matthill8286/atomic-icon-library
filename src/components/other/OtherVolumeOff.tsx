import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M19.85 19.32l-.53.53a.48.48 0 01-.7 0L15 16.24V19a1 1 0 01-1 1h-.59a1 1 0 01-.7-.29l-3.83-3.83A3 3 0 006.76 15 1.76 1.76 0 015 13.24v-2.48A1.76 1.76 0 016.76 9a3.16 3.16 0 00.86-.14L4.15 5.38a.48.48 0 010-.7l.53-.53a.48.48 0 01.7 0l14.47 14.47a.48.48 0 010 .7zM15 5a1 1 0 00-1-1h-.59a1 1 0 00-.7.29l-2.35 2.35L15 11.29z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
