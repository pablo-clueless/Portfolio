import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
            <meta charSet='utf-8' />
            <meta name='author' content='Samson Okunola'/>
            <meta name='description' content="Samson Okunola is a frontend developer and content writer."/>
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