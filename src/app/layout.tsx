import '../globals.css'

export const metadata = {
  title: 'My Digital Space',
  description: 'Portfolio for Yackob Tamire',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-light text-dark dark:bg-[#0f172a] dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
