import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M2.18 9.86A.49.49 0 012 9.32l.08-.25a.49.49 0 01.44-.35l6.39-.51 2.45-5.89a.51.51 0 01.51-.32h.26a.49.49 0 01.47.32l2.46 5.89 6.39.51a.49.49 0 01.44.35l.08.25a.49.49 0 01-.15.54L17 14l1.48 6.21a.51.51 0 01-.19.53l-.29.16a.5.5 0 01-.56 0L12 17.6l-5.47 3.33a.5.5 0 01-.56 0l-.22-.15a.51.51 0 01-.19-.53L7 14z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
