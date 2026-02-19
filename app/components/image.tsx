import type { ImgHTMLAttributes } from 'react'
import { assetPath } from 'app/lib/asset-path'

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string
  priority?: boolean
}

export default function Image({ src, priority: _priority, ...props }: ImageProps) {
  return <img src={assetPath(src)} {...props} />
}
