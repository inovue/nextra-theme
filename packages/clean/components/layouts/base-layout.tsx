import Head from 'next/head';
import { useBlogContext } from '../../blog-context';
import Footer from '../ui/Footer';
import Header from '../ui/Header';

export const BaseLayout:React.FC<{children:React.ReactNode}> = ({children}) => {
  const { config, opts } = useBlogContext()
  const title = `${opts.title}${config.titleSuffix || ''}`
  return (
    <>
      <Head>
        <title>{title}</title>
        {config.head?.({ title, meta: opts.frontMatter })}
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
