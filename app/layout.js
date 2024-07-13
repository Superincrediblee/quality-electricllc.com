import './globals.css';
import Navbar from '@/component/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '@/component/Footer';
export const metadata = {
  title: 'Quality Electric LLC',
  description:
    'Quality Electric LLC - Providing premium electrical services with exceptional customer service across Alabama, Georgia, and Tennessee. Our experienced technicians deliver professionalism and integrity for all your electrical repair needs',
  icons: {
    icon: [`favicon.ico`],
    apple: [`apple-touch-icon.png`],
    shortcut: [`apple-touch-icon.png`],
  },
  manifest: `/site.webmanifest`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
