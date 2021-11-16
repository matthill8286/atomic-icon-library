import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M12 7.3l3.82 10a10.1 10.1 0 00-7.64 0L12 7.3m.15-4.3h-.3a.51.51 0 00-.47.32L5 19.93a.51.51 0 00.12.54l.38.38a.49.49 0 00.35.15.46.46 0 00.33-.13A8.61 8.61 0 0112 18.56a8.61 8.61 0 015.79 2.31.46.46 0 00.33.13.49.49 0 00.35-.15l.38-.38a.51.51 0 00.12-.54L12.62 3.32a.51.51 0 00-.47-.32z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
