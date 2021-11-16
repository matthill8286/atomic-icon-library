import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 20.5" {...props}>
      <path
        d="M16.7 20.5c3.2 0 6.4-3.5 7.7-8.2.7-2.5.7-5.1 0-7.3-.7-2.4-2.2-4.1-4.2-4.7-.5-.1-1-.2-1.5-.2-2.5 0-4.7 1.7-5.4 4.2-.8 3 .9 6.2 3.9 7 1.3.4 2.8.2 4-.4 0 .2-.1.3-.1.5-1.1 4-3.2 5.7-4.4 5.7h-.1c-.2 0-.4.1-.5.4l-.7 2.4c0 .1 0 .3.1.4.1.1.2.2.3.2.4-.1.7 0 .9 0zm-13.2 0c3.2 0 6.4-3.5 7.7-8.2.7-2.5.7-5.1 0-7.3C10.5 2.6 9 .9 7 .3 6.7.1 6.1 0 5.6 0 3.1 0 .9 1.7.2 4.2c-.8 3 .9 6.2 3.9 7 1.3.4 2.8.2 4-.4 0 .2-.1.3-.1.5-1.1 4-3.2 5.7-4.4 5.7h-.1c-.2 0-.4.1-.5.4l-.7 2.4c0 .1 0 .3.1.4.1.1.2.2.3.2.3 0 .6.1.8.1z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#df0000"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
