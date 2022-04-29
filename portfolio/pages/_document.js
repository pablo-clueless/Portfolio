import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          {/* favicon */}
          <link rel='shortcut icon' href='/branding.png' />
          {/* -- Primary Meta Tags -- */}
          <meta name="title" content="Okunola Samson" />
          <meta name="description" content="Samson Okunola is a frontend developer who loves minimalist designs, 3D animations and a Web3 enthusiast." />

          {/* -- Open Graph / Facebook -- */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://okunolasamson.vercel.app/" />
          <meta property="og:title" content="Okunola Samson" />
          <meta property="og:description" content="Samson Okunola is a frontend developer who loves minimalist designs, 3D animations and a Web3 enthusiast." />
          <meta property="og:image" content="https://res.cloudinary.com/pabloclueless/image/upload/v1650869377/Pablo-Clueless_rtt8d9.png" />

          {/* -- Twitter -- */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://okunolasamson.vercel.app/" />
          <meta property="twitter:title" content="Okunola Samson" />
          <meta property="twitter:description" content="Samson Okunola is a frontend developer who loves minimalist designs, 3D animations and a Web3 enthusiast." />
          <meta property="twitter:image" content="https://res.cloudinary.com/pabloclueless/image/upload/v1650869377/Pablo-Clueless_rtt8d9.png" />
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