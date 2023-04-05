import { ReactElement } from 'react'
import { useBlogContext } from '../../blog-context'

type Props = {
  fixed?: boolean
}

export default function Footer(props:Props): ReactElement {
  const { config } = useBlogContext()
  
  return (
    <footer className={`nx-flex nx-w-full nx-justify-center nx-px-4 nx-py-8 ${props.fixed?'nx-fixed nx-bottom-0':''}`}>
      <p>© {new Date().getFullYear()} {config.siteName}</p>
    </footer>
  )
}
