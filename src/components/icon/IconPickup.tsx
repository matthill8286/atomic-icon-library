import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
      <path d="M2.86 20.048l9.46-17.5C13.157.997 15.008 0 17.049 0h42.95c2.04 0 3.892.997 4.729 2.547l9.459 17.5c2.692 4.976-1.248 10.869-7.799 11.205h-.69c-3.892-.003-7.43-1.878-9.083-4.81-1.637 2.912-5.139 4.783-9.002 4.81-3.863.027-7.402-1.794-9.098-4.683-1.697 2.889-5.235 4.71-9.099 4.683-3.863-.027-7.364-1.898-9.002-4.81-1.632 2.95-5.17 4.847-9.073 4.862h-.69C4.071 30.916.168 25.03 2.86 20.048zm2.81 46.039h38.07l-.555-.688a18.402 18.402 0 01-3.31-6.337h-23.43V38.261c-1.537.55-3.173.835-4.825.84h-.927c-.651-.042-1.299-.127-1.936-.258v20.22H5.67C3.616 59.148 2 60.695 2 62.574S3.616 66 5.67 66.087zm58.84 12.29C63.715 79.398 62.455 80 61.115 80c-1.34 0-2.6-.602-3.395-1.622L47.225 64.892c-8.256-10.584-.998-25.967 12.87-26.631h2.05c13.886.664 21.152 16.047 12.887 26.63L64.51 78.379zm3.548-22.725c0-3.842-3.108-6.956-6.942-6.956s-6.942 3.114-6.942 6.956c0 3.842 3.108 6.957 6.942 6.957a6.935 6.935 0 004.928-2.028 6.964 6.964 0 002.043-4.929h-.029z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
