export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const a = 'a';
  return (
    <html lang="en">
      <body>
        {children}
        {a}
      </body>
    </html>
  );
}
