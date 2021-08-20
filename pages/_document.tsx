import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Header } from '../src/components/organisms/Header';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <div id="modal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;