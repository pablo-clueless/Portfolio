import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
            <meta charset='utf-8' />
            <meta name='keywords' content='nextjs, firebase, markdown, nextjs blog, nextjs, firebase and markdown blog' />
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