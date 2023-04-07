import ExportedImage from "next-image-export-optimizer";
import Logo from 'assets/logo.svg'

/** @type {import('@nextra-theme/clean').NextraBlogTheme} */
export default {
  siteLogo: <Logo className="dark:nx-fill-white" height={42}/>,
  components: {
    img: ({src}) => {
      return (
        <ExportedImage
          src={`${src}`}
          alt="Static Image"
          width={1980}
          height={1150}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      )
    }
  },
  darkMode: true,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      {new Date().getFullYear()} © inovue
      <a href="/feed.xml">RSS</a>
    </small>
  )
}