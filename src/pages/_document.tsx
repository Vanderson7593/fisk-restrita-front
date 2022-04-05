import Document, { Head, Html, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            {/* <link rel="shortcut icon" href="/favicon.png" /> */}
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
