import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      {" "}
      <Component {...pageProps} />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
