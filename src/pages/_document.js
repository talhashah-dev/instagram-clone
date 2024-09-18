import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="A clone of Instagram built with Next.js and Firebase" />
        <meta name="keywords" content="Instagram, clone, Next.js, Firebase, social media" />
        <meta name="author" content="SMIT Batch 10 Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
