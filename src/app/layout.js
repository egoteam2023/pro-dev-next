import './globals.css';

export const metadata = {
  title: 'ego team',
  description:
    'Союз молодых и амбициозных специалистов в сфере веб-разработки и создания приложений',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
