import "../public/assets/css/variablesAndThemes/root.scss";
import "../public/assets/css/variablesAndThemes/theme.scss";
import "../public/assets/css/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/utils.scss";
// import "../public/assets/css/banner.css";
import { useEffect } from "react";
import { Footer, Navbar } from "../src/components/import";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store/store";

const DEFAULT_THEME = process.env.NEXT_PUBLIC_DEFAULT_THEME;
function MyApp({ Component, pageProps, session }) {
  useEffect(() => {
    setTheme();
  }, []);

  const setTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme && theme !== undefined && theme !== "undefined") {
      document.querySelector("body").classList.add(theme);
    } else {
      document.querySelector("body").classList.add(DEFAULT_THEME);
      localStorage.setItem("theme", DEFAULT_THEME);
    }
  };

  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={initStore()}>
      <SessionProvider session={session}>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </SessionProvider>
    </Provider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default withRedux(initStore)(MyApp);
