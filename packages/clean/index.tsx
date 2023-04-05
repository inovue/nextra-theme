import type { NextraThemeLayoutProps } from 'nextra'

import type { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import type { LayoutProps } from './types'
import { BlogProvider } from './blog-context'

import { CoverLayout } from './components/layouts/cover-layout'
import { PostLayout } from './components/layouts/post-layout'
import { PostsLayout } from './components/layouts/posts-layout'
import { PageLayout } from './components/layouts/page-layout'
import { DEFAULT_THEME } from './constants'

const layoutMap = {
  cover: CoverLayout,
  page: PageLayout,
  post: PostLayout,
  posts: PostsLayout,
  tag: PostsLayout
}

const BlogLayout = ({
  config,
  children,
  opts
}: LayoutProps & { children: ReactNode }): ReactElement => {
  const type = opts.frontMatter.type || 'post'
  const Layout = layoutMap[type]
  if (!Layout) {
    throw new Error(
      `nextra-theme-blog does not support the layout type "${type}" It only supports "post", "page", "posts" and "tag"`
    )
  }
  return (
    <BlogProvider opts={opts} config={config}>
      <Layout>{children}</Layout>
    </BlogProvider>
  )
}

export default function Layout({
  children,
  ...context
}: NextraThemeLayoutProps) {
  const extendedConfig = { ...DEFAULT_THEME, ...context.themeConfig }
  // console.log('context', JSON.stringify(context, null, 2));
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BlogLayout config={extendedConfig} opts={context.pageOpts}>
        {children}
      </BlogLayout>
    </ThemeProvider>
  )
}

export { useTheme } from 'next-themes'
export { useBlogContext } from './blog-context'
export { getStaticTags } from './utils/get-tags'
export * from './types'
