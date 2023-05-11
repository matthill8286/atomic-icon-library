import React from 'react'
import { ProductLineSvgComponent } from './ProductLineSvgComponent'

interface ProductLineSvgComponentProps {
  primaryPaths: JSX.Element
  alternate?: JSX.Element
}

const getSvgComponent = ({ primaryPaths, alternate }: ProductLineSvgComponentProps) => {
  const Component = (props: React.SVGProps<SVGSVGElement>) => (
    <ProductLineSvgComponent {...props} primaryPaths={primaryPaths} alternate={alternate} />
  )

  return React.memo(Component)
}

export default getSvgComponent
