import '../styles/globals.css';
import Nav from './nav';
import '@tremor/react/dist/esm/tremor.css';
import { Suspense } from 'react';

export const metadata = {
  title: 'Poly Wallet',
  description:
    'The best personal finance manager.',
};

export default async function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full bg-gray-50'>
    <body className='h-full'>
      <Suspense fallback='...'>
        {/* @ts-expect-error Server Component */}
        <Nav />
      </Suspense>
      {children}
    </body>
    </html>
  );
}