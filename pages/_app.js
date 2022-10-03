import "../public/assets/css/variablesAndThemes/root.scss";
import "../public/assets/css/variablesAndThemes/theme.scss";
import "../public/assets/css/globals.scss";
import "../public/assets/css/utils.scss";
// import "../public/assets/css/banner.css";
import { useEffect } from "react";
import { Footer, Navbar } from "../src/components/import";
import { SessionProvider } from "next-auth/react";
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
    <div className="App">
      <SessionProvider session={session}>
        <div className="App">
          <Navbar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </div>
      </SessionProvider>
    </div>
  );
}

export default MyApp;

const EmptyLayout = ({ children }) => <>{children}</>;
