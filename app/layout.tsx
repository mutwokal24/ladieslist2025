import type { Metadata } from 'next'

import React from 'react'

export const metadata: Metadata = {
  title: 'Ladies List Classifieds',
  description: 'An advanced, modern classifieds marketplace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Ladies List</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} Ladies List</p>
        </footer>
      </body>
    </html>
  )
}
