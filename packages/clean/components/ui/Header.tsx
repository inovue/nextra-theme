import type { ReactElement } from 'react'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import { useBlogContext } from '../../blog-context'
import { collectPostsAndNavs } from '../../utils/collect'
import { useTheme } from 'next-themes'
import { useMounted } from 'nextra/hooks'

type Props = {
  fixed?: boolean
}

export default function Header(props:Props): ReactElement {
  const { opts, config } = useBlogContext()
  const { navPages } = collectPostsAndNavs({ opts, config })

  const { resolvedTheme } = useTheme();
  const isMounted = useMounted();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <>{isMounted &&
    <header className={`nx-flex nx-w-full nx-items-center nx-justify-between nx-px-4 nx-h-16 nx-top-0 nx-backdrop-blur nx-z-40 ${props.fixed?'nx-fixed':'nx-sticky'}`}>
      <Link href='/'>
        <h1 className="nx-text-2xl nx-font-black" >{config.siteName}</h1>
      </Link>
      <nav className="nx-flex">
        <ul className="nx-flex nx-gap-4 nx-font-bold">
          {navPages.map(page => (
            <li key={page.route} >{page.active ? 
              <span className='nx-text-gray-500'>{page.frontMatter?.title || page.name}</span> :
              <Link href={page.route} passHref>{page.frontMatter?.title || page.name}</Link>
            }</li>
          ))}
          {config.navs?.map(nav => (
            <li key={nav.url}><Link href={nav.url} passHref>{nav.name}</Link></li>
          ))}
          {config.darkMode && 
            <li><ThemeSwitch /></li>
          }
        </ul>
      </nav>
    </header>
    }</>
  )
}
