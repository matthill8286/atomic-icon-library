import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12.13 2.15A1 1 0 0011.6 2h-.1a.5.5 0 00-.5.5v4.62a.5.5 0 01-.92.27 7.17 7.17 0 00-2.44-1.75.47.47 0 00-.43 0 .49.49 0 00-.21.41c-.31 2.83-3 4-3 8a8 8 0 0016 0c0-6.28-5.46-10.39-7.87-11.9zM12 20a4 4 0 01-4-4c0-2.7 2.72-4.26 3-5.78a.25.25 0 01.28-.2A6.59 6.59 0 0116 16a4 4 0 01-4 4z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
