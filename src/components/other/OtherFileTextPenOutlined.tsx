import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}>
      <path fill="none" d="M0 0h80v80H0z" />
      <path
        d="M14.381 11.535h22.772v5.693H14.381v-5.693zm0 11.386H48.54v5.693H14.381v-5.693zm0 34.158H31.46v5.693H14.381v-5.693zM59.926.148l-4.27 12.81L44.515 1.817A5.688 5.688 0 0040.49.148H8.688a5.695 5.695 0 00-5.693 5.694v68.316a5.695 5.695 0 005.693 5.694h45.545a5.696 5.696 0 005.693-5.694V57.079L77.005 5.842 59.926.148zm-5.693 74.01H8.688V5.842h34.159v11.386h11.386L48.54 34.307H14.381V40h32.263l-1.902 5.693H14.381v5.693h28.466l4.554 17.079 6.832-6.211v11.904zm.763-20.29l-6.212-2.3L63.53 7.35l6.279 2.09-14.813 44.428z"
        fillRule="nonzero"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
