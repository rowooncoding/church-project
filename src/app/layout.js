"use client";

import Head from 'next/head'
import './globals.css'
import { Provider } from 'react-redux'
import store from './redux/store'

export default function RootLayout({children}) {
  return (
    <html lang="ko">
      <Head>
          <link
              href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
              rel="stylesheet"
          />
      </Head>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}