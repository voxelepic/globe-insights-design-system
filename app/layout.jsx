import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata = {
  title: 'Globe Insights — Short Trips. Long Memories. Zero B.S.',
  description: 'You give us a weekend. We give you a city. 3 days max. 1 carry-on. Best comfort per dollar, every time.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="app">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
