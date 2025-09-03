import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hemel Hempstead Band",
  description: "Community brass band serving Hemel Hempstead for over 100 years",
  icons: {
    icon: '/logo-blue-small.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Optima';
              src: local('Optima'), local('Optima-Regular');
              font-weight: normal;
            }
            
            body {
              font-family: 'Merriweather', serif;
            }
            
            h1, h2, h3, h4, h5, h6 {
              font-family: 'Optima', 'Trebuchet MS', sans-serif;
            }
          `
        }} />
      </head>
      <body className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        {children}
      </body>
    </html>
  );
}