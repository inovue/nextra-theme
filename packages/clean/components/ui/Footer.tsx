import { ReactElement } from 'react'
import { useBlogContext } from '../../blog-context'
import Link from 'next/link'

type Props = {
  fixed?: boolean
}

export default function Footer(props:Props): ReactElement {
  const { config } = useBlogContext()
  
  return (
    <footer className={`nx-flex nx-w-full nx-justify-center nx-px-4 nx-py-8 ${props.fixed?'nx-fixed nx-bottom-0':'nx-mt-auto'}`}>
      <p>© {new Date().getFullYear()} <Link href="/">{config.siteName}</Link></p>
    </footer>
  )
}
