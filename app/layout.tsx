import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

// META DATA SEO
export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000"),

	title: 'MiladJoodi',
	authors: {
		name: "chensokheng",
	},

	description:
		"Based in localhost 📍, I 'm a web developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "MiladJoodi",
		description:
			"Based in localhost 📍, I'm a web developer passionate about building a modern web application that users love.",
		url: "https://localhost:3000",
		siteName: "MiladJoodi",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};
// META DATA SEO


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

        </body>
    </html>
  );
}
