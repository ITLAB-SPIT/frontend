import "../public/assets/css/variablesAndThemes/root.scss";
import "../public/assets/css/variablesAndThemes/theme.scss";
import "../public/assets/css/globals.scss";
import "../public/assets/css/utils.scss";
import { useEffect } from "react";
import { Footer, Navbar } from "../src/components/import";

const DEFAULT_THEME = process.env.NEXT_PUBLIC_DEFAULT_THEME;
function MyApp({ Component, pageProps }) {
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
    <div className="App">
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </div>
  );
}

export default MyApp;

const EmptyLayout = ({ children }) => <>{children}</>;
