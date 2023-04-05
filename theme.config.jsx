import ExportedImage from "next-image-export-optimizer";



export default {
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