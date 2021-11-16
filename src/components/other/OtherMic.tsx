import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M8 10V6a4 4 0 018 0v4a4 4 0 01-8 0zm11.08 3.45a.39.39 0 00-.22-.25l-1.05-.49a.42.42 0 00-.55.18A6 6 0 016.77 13a.49.49 0 00-.64-.21l-.91.42a.48.48 0 00-.26.3.51.51 0 000 .4 8 8 0 006 4.07V20H9.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H13v-2.07a8 8 0 006-4.07v-.08a.38.38 0 00.08-.33z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
