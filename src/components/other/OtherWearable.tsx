import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 31 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.696 11.258A15.272 15.272 0 0130.546 24a15.273 15.273 0 01-6.806 12.742l-1.571 9.425A2.182 2.182 0 0119.987 48h-9.382a2.182 2.182 0 01-2.182-1.833l-1.57-9.425a15.273 15.273 0 010-25.484L8.4 1.833A2.182 2.182 0 0110.583 0h9.36a2.182 2.182 0 012.182 1.833l1.57 9.425zm-8.422 1.833C9.25 13.09 4.365 17.975 4.365 24a10.91 10.91 0 0010.91 10.909c6.024 0 10.908-4.884 10.908-10.909S21.3 13.09 15.274 13.09z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
