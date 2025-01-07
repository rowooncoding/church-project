import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'church-project',
  description: 'Generated by create next app',
}

export default function RootLayout({children}) {
  return (
    <html lang="ko">
      <Head>
          <link
              href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
              rel="stylesheet"
          />
      </Head>
      <body>{children}</body>
    </html>
  )
}