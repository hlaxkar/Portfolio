
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next"
import CustomCursor from './components/CustomCursor';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Harshit Laxkar - Full Stack Developer',
    description: 'Portfolio of Harshit Laxkar, a passionate Full Stack Developer specializing in the MEAN stack, Node.js, and modern web technologies.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                {/* Preconnect to third-party origins — saves ~110ms per Lighthouse */}
                <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                    <div className="gradient-bg" aria-hidden="true" />
                    <div className="grain-overlay" aria-hidden="true" />
                    <CustomCursor />
                    <Header />
                    <main className="container mx-auto px-6 pt-24">
                        {children}
                        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
                        <Analytics />
                        <SpeedInsights />
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}