import { Theme, theme } from "../modules/theme";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "../modules/styles";
import { NotificationProvider } from "contexts/notification";
import Header from "components/header";
import Footer from "components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme as Theme}>
        <NotificationProvider>
          <Header menus={[]} />
          <Component {...pageProps} />
          <Footer />
        </NotificationProvider>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
