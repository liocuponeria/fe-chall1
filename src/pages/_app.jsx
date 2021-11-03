import Header from "../components/Header";
import "../styles/globals.css";
import { ApiContextProvider } from "../Context/apicontext";
import Card from "../components/Card";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
