import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M22 9.32l-.08-.25a.49.49 0 00-.44-.35l-6.39-.51-2.49-5.89a.49.49 0 00-.47-.32h-.26a.51.51 0 00-.48.32L8.94 8.21l-6.39.51a.49.49 0 00-.44.35L2 9.32a.49.49 0 00.15.54L7 14l-1.44 6.22a.51.51 0 00.19.53l.25.15a.47.47 0 00.3.1.48.48 0 00.26-.07L12 17.6l5.47 3.33a.48.48 0 00.26.07.47.47 0 00.3-.1l.22-.15a.51.51 0 00.19-.53L17 14l4.86-4.15a.49.49 0 00.14-.53zm-7 4.06l1.12 4.68L12 15.55V5.41l1.86 4.46 4.81.38z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
