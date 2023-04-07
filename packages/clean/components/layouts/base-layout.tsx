import Head from 'next/head';
import { useBlogContext } from '../../blog-context';
import Footer from '../ui/Footer';
import Header from '../ui/Header';

export const BaseLayout:React.FC<{children:React.ReactNode}> = ({children}) => {
  const { config, opts } = useBlogContext()
  
  return (
    <>
      <Head>
        <title>{[opts.title, config.siteName].filter(v=>!!v).join('-')}</title>
        { opts.frontMatter.description && 
          <meta name="description" content={opts.frontMatter.description} /> 
        }
        {config.head?.({ title: opts.title, meta: opts.frontMatter })}
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
