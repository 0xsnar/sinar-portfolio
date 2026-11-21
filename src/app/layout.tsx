import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SINAR — Interactive Pixel Portfolio', description: 'A little digital universe by Sinar.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
