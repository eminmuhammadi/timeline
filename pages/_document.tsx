/* eslint-disable @next/next/no-title-in-document-head */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <meta content="Voices of truth, not hate." name="description" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body aria-label="Document" role="document">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
