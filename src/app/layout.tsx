import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Slayerbound | Codes & Trello",
  description: "Active Slayerbound codes updated daily.",
  openGraph: {
    title: "Slayerbound Codes",
    description: "Find all active Slayerbound codes here.",
    url: "https://slayerbound.vercel.app",
    siteName: "Slayerbound",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white">
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}	
