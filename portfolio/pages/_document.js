import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
            {/*  Primary Meta Tags */}
          <meta name="title" content="Okunola Samson's Portfolio Site"  />
          <meta name="description" content="Samson Okunola is a frontend developer  who loves minimalist designs and 3D animations." />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://okunolasamson.vercel.app/" />
          <meta property="og:title" content="Okunola Samson's Portfolio Site" />
          <meta property="og:description" content="Samson Okunola is a frontend developer  who loves minimalist designs and 3D animations." />
          <meta property="og:image" content="/public/lockscreen.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://okunolasamson.vercel.app/" />
          <meta property="twitter:title" content="Okunola Samson's Portfolio Site" />
          <meta property="twitter:description" content="Samson Okunola is a frontend developer  who loves minimalist designs and 3D animations." />
          <meta property="twitter:image" content="/public/lockscreen.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument