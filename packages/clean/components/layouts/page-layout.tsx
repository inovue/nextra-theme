import type { ReactNode } from 'react'
import { BaseLayout } from './base-layout'
import { Article } from '../ui/Article'
import { useBlogContext } from '../../blog-context'


export const PageLayout:React.FC<{children:React.ReactNode}> = ({ children }) => {
  const { opts } = useBlogContext();
  
  return (
    <BaseLayout>
    <Article>
        <h1>{opts.title}</h1>
        {children}
      </Article>
    </BaseLayout>
  )
}
