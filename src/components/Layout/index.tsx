import Head from 'next/head';
import { Container } from './style';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>T9 converter</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon/favicon-96x96.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
