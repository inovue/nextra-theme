import type { ReactElement } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { split } from '../../utils/get-tags'
import { useBlogContext } from '../../blog-context'
import { getParent } from '../../utils/parent'

import {BiTime} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'

export default function Meta(): ReactElement {
  const { opts, config } = useBlogContext()
  const { author, date, tag } = opts.frontMatter
  const { back } = getParent({ opts, config })
  const tags = tag ? split(tag) : []

  const readingTime = opts.readingTime?.text
  const dateText = date && dayjs(date).format('YYYY-MM-DD')
  return (
    <div className='nx-not-prose nx-flex nx-flex-col nx-gap-6 nx-pb-12'>
      <div className='nx-flex'>
        {back && 
          <Link href={back} passHref>Back</Link>
        }
        <div className='nx-flex-1' />
        {date && 
          <div className='nx-flex nx-items-center'>
            <BiTime className='nx-mr-2'/>
            <time dateTime={dateText}>{dateText}</time>
          </div>
        }
        {readingTime && 
          <div className='nx-flex'>・
            <div>{readingTime}</div>
          </div>
        }
      </div>
      {tags.length > 0 && 
        <div className='nx-flex nx-overflow-auto nx-gap-2 nx-text-sm'>
          {tags.map(t => (
            <div className='nx-bg-primary-300 dark:nx-bg-primary-600 nx-whitespace-nowrap nx-py-1 nx-px-3 nx-rounded-full' key={t} ><Link href="/tags/[tag]" as={`/tags/${t}`} passHref>{t}</Link></div>
          ))}
        </div>
      }
    </div>
    
  )
}
