import type { ReactNode } from 'react'
import Meta from '../ui/Meta'
import { Article } from '../ui/Article'
import { useBlogContext } from '../../blog-context'
import { BaseLayout } from './base-layout'

export const PostLayout:React.FC<{children:React.ReactNode}> = ({ children }) => {
  const { opts } = useBlogContext()
  
  return (
    <BaseLayout>
      <Article>
        <Meta />
        <h1>{opts.title}</h1>
        {children}
      </Article>
    </BaseLayout>
  )
}
