import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

export const metadata = {
  title: "John Cohen | Full Stack Developer",
  description: "Experienced full stack developer crafting elegant and performant web applications",
  keywords: "web developer, full stack, React, Next.js, TypeScript",
  openGraph: {
    type: 'website',
    title: 'John Cohen | Full Stack Developer',
    description: 'Experienced full stack developer crafting elegant and performant web applications',
    url: 'https://johncohen.dev',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-[var(--background)] text-[var(--foreground)] font-sans antialiased transition-colors duration-300`}
      >

            <main className="flex-grow container mx-auto px-4 py-12 sm:px-6 lg:px-8">
              {children}
            </main>

      </body>
    </html>
  )
}