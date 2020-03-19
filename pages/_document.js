import Document, { Head, Main, NextScript } from "next/document";

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    const isProduction = process.env.NODE_DEV === 'production';

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        isProduction,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="fr">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico?v=2" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="La Rochelle Optique" />
          <meta name="apple-mobile-web-app-title" content="La Rochelle Optique" />
          <meta name="theme-color" content="#f60" />
          <meta name="msapplication-navbutton-color" content="#f60" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <title>SARM - Service d'aide à la répartition médicale</title>
          <meta name="description" content='Service daide à la répartition médicale' />
          <meta property="og:title" content='SARM' />
          <meta property="og:description" content='Service daide à la répartition médicale' />

        </Head>



        {/* <meta property="og:image" content={ogImage && ogImage.url} /> */}
        {/* <meta property="og:image:alt" content={ogImage && ogImage.alt} /> */}
        {/* <meta property="og:url" content={ogUrl} /> */}


        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

