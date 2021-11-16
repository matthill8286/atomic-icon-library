import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M55 0H5a5 5 0 00-5 5v38a5 5 0 005 5h50a5 5 0 005-5V5a5 5 0 00-5-5zm-1.25 17.5l-4.25-1.075L47 5.875h6.75V17.5zm0 17.3l-2.9-12.5 2.9.725V34.8zM42.35 7.075l1.875 8.15L32.8 12.35V6.4c.01-.133.01-.267 0-.4h9.6c-.083.352-.1.717-.05 1.075zm-7.5 24.35l-3.225-1.75a2.175 2.175 0 00-2.1 0l-3.35 1.8 4.375-9.125 4.3 9.075zM28.075 6c-.01.133-.01.267 0 .4v4.775l-21.2-5a2.075 2.075 0 00-.55 0L28.075 6zM6.25 11.425l5 1.2-5 8.175v-9.375zm0 18.8l10-16.4 11.25 2.7-9.175 19.3a2.874 2.874 0 00.375 3.1 2.225 2.225 0 002.775.55l8.9-4.775 8.775 4.75a2.225 2.225 0 002.775-.525 2.875 2.875 0 00.4-3.1l-8.4-17.75L45.575 21l4.575 19.75c.117.465.36.888.7 1.225H6.25v-11.75z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
