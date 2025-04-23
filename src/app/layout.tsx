import "../globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Yackob Tamire – Business Analyst Portfolio</title>
      </head>
      <body className="bg-white text-black font-sans px-6 md:px-20 py-12">
        {children}
      </body>
    </html>
  );
}

