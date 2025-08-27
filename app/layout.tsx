// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Readme Generator",
  description: "Generate awesome README files with AI (Gemini)",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl font-bold text-indigo-600">
              README <span className="text-gray-900">Generator</span>
            </h1>
            <nav className="space-x-4 text-sm font-medium">
              <a href="/" className="hover:text-indigo-600">Home</a>
              <a href="https://github.com/Lannnnnzzzzzzzzzzz" target="_blank" className="hover:text-indigo-600">
                GitHub
              </a>
            </nav>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-8">
          <div className="max-w-5xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
            © 2025 lnnzphy | Powered by Gemini AI
          </div>
        </footer>
      </body>
    </html>
  )
}
