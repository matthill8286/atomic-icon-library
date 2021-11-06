import React from 'react'
import { ProductLineSvgComponent } from './ProductLineSvgComponent'

interface ProductLineSvgComponentProps {
  primaryPaths: JSX.Element
  danonePaths?: JSX.Element
}

const getSvgComponent = ({ primaryPaths, danonePaths }: ProductLineSvgComponentProps) => {
  const Component = (props: React.SVGProps<SVGSVGElement>) => (
    <ProductLineSvgComponent {...props} primaryPaths={primaryPaths} danonePaths={danonePaths} />
  )

  return React.memo(Component)
}

export default getSvgComponent
