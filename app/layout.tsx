import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InfoByte Tech Pvt - IT Solutions & Services',
  description: 'Leading IT solutions provider offering software development, cloud services, cybersecurity, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}



