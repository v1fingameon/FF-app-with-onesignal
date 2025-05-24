import Head from "next/head";
import { Fragment } from "react";
import Home from "../containers/home";

export default function Homepage() {
  return (
    <Fragment>
      <Head>
        <title>{"FF Free Diamonds"}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
     crossorigin="anonymous"></script>
      </Head>
      <div
        
      >
        <Home />
      </div>
    </Fragment>
  );
}
