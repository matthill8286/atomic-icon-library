import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 55 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.5 14.025l-2.076-8.35A7.5 7.5 0 0044.15 0h-7.125c-.476.005-.91.275-1.125.7l-.55 1.1a1.275 1.275 0 01-1.125.7h-13.45a1.275 1.275 0 01-1.124-.7L19.1.7a1.275 1.275 0 00-1.125-.7H10.85a7.5 7.5 0 00-7.275 5.675L1.5 14.025A49.698 49.698 0 000 26.15V35a5 5 0 005 5h1.575a7.5 7.5 0 007.5-6.276l.675-4.124a2.5 2.5 0 012.5-2.1H38a2.5 2.5 0 012.5 2.1l.674 4.124a7.5 7.5 0 007.5 6.275H50a5 5 0 005-5v-8.85c0-4.087-.503-8.16-1.5-12.124zM13.75 20a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5zm35-2.8c.69 0 1.25-.56 1.25-1.25v-1.9c0-.69-.56-1.25-1.25-1.25H44.7V8.75c0-.69-.56-1.25-1.25-1.25h-1.9c-.691 0-1.25.56-1.25 1.25v4.05h-4.05c-.691 0-1.25.56-1.25 1.25v1.9c0 .69.559 1.25 1.25 1.25h4.05v4.05c0 .69.559 1.25 1.25 1.25h1.9c.69 0 1.25-.56 1.25-1.25V17.2h4.05z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
