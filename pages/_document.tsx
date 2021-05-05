import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import Nav from '@/components/index/nav';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <Nav />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
