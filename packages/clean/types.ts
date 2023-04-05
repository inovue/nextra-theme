/* eslint typescript-sort-keys/interface: error */
import type { PageOpts } from 'nextra'
import type { ReactNode } from 'react'
import type { Components } from 'nextra/mdx'

export interface NextraBlogTheme {
  siteName?: string

  comments?: ReactNode
  components?: Components
  darkMode?: boolean
  footer?: ReactNode
  head?: ({ meta, title }: {
    meta: Record<string, any>
    title: string
  }) => ReactNode
  navs?: {
    name: string
    url: string
  }[]
  readMore?: string
  titleSuffix?: string
}

export type BlogPageOpts = PageOpts<BlogFrontMatter>

export type BlogFrontMatter = {
  author?: string
  back?: string
  date?: string
  description?: string
  tag?: string | string[]
  title?: string
  type?: 'cover' | 'post' | 'page' | 'posts' | 'tag'
}

export interface LayoutProps {
  config: NextraBlogTheme
  opts: BlogPageOpts
}
