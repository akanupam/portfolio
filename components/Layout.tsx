import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <main className="container main">{children}</main>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Made by Aditya — Built with Next.js</div>
      </footer>
    </div>
  )
}
