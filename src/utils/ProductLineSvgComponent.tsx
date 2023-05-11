import * as React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

interface ProductLineSvgComponentProps extends React.SVGProps<SVGSVGElement> {
  primaryPaths: JSX.Element
  alternate?: JSX.Element
}

export const ProductLineSvgComponent = (props: ProductLineSvgComponentProps) => {
  const { name }: { name: 'Primary' | 'Alternate' } = useContext(ThemeContext)
  const pathProps = {
    Primary: props.primaryPaths,
    Alternate: props.alternate,
  }

  return (
    <svg width={32} height={32} viewBox={'0 0 24 24'}>
      {pathProps[name]}
    </svg>
  )
}
