import Head from "next/head";
import { enableStaticRendering } from "mobx-react-lite";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import { TITLE, META_DESCRIPTION } from "root/config";
import ThemeProvider from "components/ThemeProvider";

function MyApp({ Component: NextPage, pageProps }) {
  // use static rendering in SSR mode
  if (typeof window === "undefined") {
    enableStaticRendering(true);
  }

  const { Layout = ({ children }) => <>{children}</>, layoutProps = () => {} } =
    NextPage;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>
      <DefaultSeo title={TITLE} description={META_DESCRIPTION} />
      <NextNProgress />
      <ThemeProvider>
        <Layout {...layoutProps(pageProps)}>
          <NextPage {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
