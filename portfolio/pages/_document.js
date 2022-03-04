import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
            <meta charSet='utf-8' />
            <meta name='author' content='Samson Okunola'/>
            <meta name='description' content="Samson Okunola is a frontend developer and content writer."/>
            <meta name='keywords' content='Web development, Software development, Frontend Developer' />
            {/* Facebook Open Graph */}
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://okunolasamson.vercel.app' />
            <meta property='og:title' content='Okunola Samson Portfolio Site' />
            <meta property='og:description' content='Samson Okunola is a frontend developer and content writer.' />
            <meta property='og:image' content='/public/lockscreen.png' />

            {/* Twitter Meta Tags */}
            <meta property='twitter:card' content='Portfolio WEbsite' />
            <meta property='twitter:url' content='https:okunolasamson.vercel.app' />
            <meta property='twitter:title' content='Okunola Samson Portfolio Site' />
            <meta property='twitter:description' content='Samson Okunola is a frontend developer and content writer.' />
            <meta property='twitter:image' content='/public/lockscreen.png' />
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