import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
            <meta charset='utf-8' />
            <meta name='author' content='Samson Okunola'/>
            <meta name='description' content="Samson Okunola's portfolio site"/>
            <meta name='description' content='next app'/>
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