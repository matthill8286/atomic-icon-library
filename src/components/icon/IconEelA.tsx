import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={44} width={63} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M47 .104l15.625 21.875L47 43.854H3.25c-.846 0-1.579-.302-2.197-.904-.619-.602-.928-1.343-.928-2.221v-37.5c0-.847.31-1.58.928-2.198S2.403.104 3.25.104zM29.764 31.646h5.468l-4.736-20.654h-6.738l-4.883 20.654h5.273l.586-3.417h4.395zm-2.588-14.892c.032.293.073.61.122.952.049.342.122.708.22 1.099l.927 5.224h-2.93l.928-5.224c.065-.39.122-.757.171-1.099.05-.342.09-.66.122-.952.065-.293.106-.57.122-.83.017-.26.041-.488.074-.684h.097c.033.196.057.423.074.684.016.26.04.537.073.83z" />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
