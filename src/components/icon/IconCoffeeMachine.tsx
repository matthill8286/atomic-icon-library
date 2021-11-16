import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.8 0h28.8a4.8 4.8 0 014.8 4.8v38.4a4.8 4.8 0 01-4.8 4.8H4.8A4.8 4.8 0 010 43.2v-4.8h10.8c-2.64 0-4.8-2.326-4.8-5.17v-3.876H3.6c-1.2 0-2.4-1.034-2.4-2.585 0-1.55 1.2-2.584 2.4-2.584H6V21.6h14.4v11.63c0 2.844-2.16 5.17-4.8 5.17h13.2V9.6h-12l-1.44 7.2h-4.32L9.6 9.6H0V4.8A4.8 4.8 0 014.8 0zM95.955 45.58l-2.395-7.997a1.506 1.506 0 00-1.466-1.142h-4.51V13.56a13.54 13.54 0 00-3.984-9.59A13.624 13.624 0 0073.98 0a13.624 13.624 0 00-9.618 3.972 13.54 13.54 0 00-3.984 9.589v.643h-5.882c-1.578 0-2.857 1.364-2.857 3.047L48 44.953C48 46.636 49.279 48 50.857 48h8.606a9.774 9.774 0 01-3.21-7.254c0-5.412 4.387-9.8 9.8-9.8 1.743 0 3.381.456 4.8 1.255V17.25c0-1.683-1.28-3.047-2.857-3.047h-4.595v-.643c0-2.797 1.115-5.48 3.1-7.458a10.596 10.596 0 017.48-3.09c2.806 0 5.497 1.112 7.481 3.09a10.531 10.531 0 013.1 7.458v22.88H80.05a1.514 1.514 0 00-1.466 1.142l-2.691 7.997a1.502 1.502 0 00.803 1.719c.207.1.433.152.663.152h17.129a1.514 1.514 0 001.478-1.194 1.503 1.503 0 00-.012-.677zM66.052 47.45a6.705 6.705 0 100-13.41 6.705 6.705 0 000 13.41z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
