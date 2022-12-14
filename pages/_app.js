import "../styles/globals.css";
import Layout from "../components/layout";
// import { wrapper, store } from "../store/store";
// import { Provider } from "react-redux";
import store from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
