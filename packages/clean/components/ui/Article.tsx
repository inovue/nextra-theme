import {MDXContainer} from './MDXContainer'

export const Article:React.FC<{children?:React.ReactNode}> = ({children}) => {
  return (
    <MDXContainer>
      <article className={`nx-prose nx-max-w-[920px] nx-mx-auto nx-p-4 dark:nx-prose-dark `}>{children}</article>
    </MDXContainer>
  )
}
